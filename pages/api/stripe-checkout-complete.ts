import {stripe} from '../../utils/stripe';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Database } from '../../lib/database.types';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { buffer } from "micro";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET as string

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Supabase client
    const supabaseServerClient = createServerSupabaseClient<Database>({
        req,
        res,
      })

    const signature = req.headers['stripe-signature'] as string

    const buf = await buffer(req)
    const event = stripe.webhooks.constructEvent(buf, signature, WEBHOOK_SECRET)

    // Stripe checkout complete - Link stripe account to supabase account
    if (req.method === 'POST') {
        if (event.type !== 'checkout.session.completed') {
            return res.status(400).json({ message: "Invalid event type" })
        }

        const event_metadata = (event.data.object as { metadata: { supabaseUUID: string, email: string } }).metadata

        // Check if data in customers table for this user
        const { data: customer_data } = await supabaseServerClient.from('customers')
        .select('id')
        .eq('user_uuid', event_metadata.supabaseUUID)
        .limit(1)

        if (customer_data?.length === 1) {
            console.log(customer_data);
            // If user data in table, just update is_subscribed to true
            const { error: update_error } = await supabaseServerClient.from('customers')
            .update({ is_subscribed: true })
            .eq("user_uuid", event_metadata.supabaseUUID)

            if (update_error) {
                console.log(update_error);
            } else {
                res.status(200).json({ message: "Successfully updated record customer" })
                console.log("successfully updated customer subscription status");
            }

        } else {
            // If no user data, insert row with customer user uuid and is_subscribed = true
            const { error } = await supabaseServerClient.from('customers').insert({ user_uuid: event_metadata.supabaseUUID, is_subscribed: true })
            if (error) {
                res.status(500).json({ message: "Failed to add record to database for customer" })
                console.log("Failed to update customer subscription status");
            } else {
                res.status(200).json({ message: "Successfully added record for subscribed customer" })
            }
        }

    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  }
