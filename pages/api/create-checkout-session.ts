import {stripe} from '../../utils/stripe';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Database } from '../../lib/database.types';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { PRODUCTS } from '../../lib/constants';


const getProductPrice = (productName: string, interval: string) => {
    return PRODUCTS
    .find(product => product.name === productName)?.prices
    .find(price => price.interval === interval)

}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { product, interval } = req.body
    const productPrice = getProductPrice(product, interval)

    // Fetch supabase user
    const supabaseServerClient = createServerSupabaseClient<Database>({
        req,
        res,
      })

    const { data } = await supabaseServerClient.auth.getUser()

    const supabaseUUID = data.user?.id
    const email = data.user?.email

    // Stripe checkout
    if (req.method === 'POST' && email && supabaseUUID) {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                metadata: {
                    supabaseUUID,
                    email,
                },
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: [
                    {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: `quiz-app ${interval}ly payment`
                        },
                        unit_amount: productPrice?.unit_amount,
                    },
                    quantity: 1,
                    }
                ],
                success_url: `${req.headers.origin}/thankyou`,
                cancel_url: `${req.headers.origin}/pricing`,
                });

            const url = session.url

            if (url) {
                return res.status(200).send({ url })
            }

        } catch (err) {
            console.log(err);
        }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
