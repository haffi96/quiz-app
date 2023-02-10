'use client';

import cn from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, SUBSCRIPTION } from '../../lib/constants';
import supabaseBrowser from '../../supabaseConfig/supabase-browser';
import { useRouter } from 'next/navigation';


type BillingInterval = 'year' | 'month';


export default function Pricing() {
    const router = useRouter();
    const [billingInterval, setBillingInterval] = useState<BillingInterval>('month');

    const handleCheckout = async (productName: string) => {
        const { data: { session } } = await supabaseBrowser.auth.getSession()

        if (!session?.access_token) {
            router.push('/login')
            return
        } else if (productName === 'Free') {
            router.push('/')
            return
        }

        const resp = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product: productName,
                interval: billingInterval,
            }
            )
        });

        const res = await resp.json()

        if (!res.url) {
            console.log("not url in response");
        }

        const url = res.url

        window.location.assign(url)
    }

    return (
        <section>
            <div className="mx-auto max-w-6xl py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:items-center">
                    <h1 className="text-4xl font-extrabold text-zinc-700 dark:text-zinc-200 sm:text-center sm:text-6xl">
                        Pricing Plans
                    </h1>
                    <p className="m-auto mt-5 max-w-2xl text-xl text-zinc-700 dark:text-zinc-200 sm:text-center sm:text-2xl">
                        Start building for free, then add a site plan to go live. Account
                        plans unlock additional features.
                    </p>
                    <div className="relative mt-6 flex self-center rounded-lg border border-zinc-800 bg-zinc-900 p-0.5 sm:mt-8 sm:w-1/2 lg:w-1/3">
                        <button
                            onClick={() => setBillingInterval('month')}
                            type="button"
                            className={`${billingInterval === 'month'
                                ? 'relative w-1/2 border-zinc-800 bg-zinc-700 text-white shadow-sm'
                                : 'relative ml-0.5 w-1/2 border border-transparent text-zinc-400'
                                } m-1 whitespace-nowrap rounded-md py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:px-8`}
                        >
                            Monthly billing
                        </button>
                        <button
                            onClick={() => setBillingInterval('year')}
                            type="button"
                            className={`${billingInterval === 'year'
                                ? 'relative w-1/2 border-zinc-800 bg-zinc-700 text-white shadow-sm'
                                : 'relative ml-0.5 w-1/2 border border-transparent text-zinc-400'
                                } m-1 whitespace-nowrap rounded-md py-2 text-sm font-medium focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:px-8`}
                        >
                            Yearly billing
                        </button>
                    </div>
                </div>
                <div className="mt-12 space-y-4
                sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 sm:p-10
                lg:mx-auto lg:max-w-4xl lg:grid-cols-2
                xl:mx-0 xl:max-w-none xl:grid-cols-2">
                    {PRODUCTS.map((product) => {
                        const price = product.prices.find(
                            (price) => price.interval === billingInterval
                        )
                        const priceString = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: price?.currency ? price.currency : 'GBP',
                            minimumFractionDigits: 0
                        }).format((price?.unit_amount || 0) / 100);
                        return (
                            <div
                                key={product.id}
                                className={cn(
                                    'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 sm:text-3xl lg:text-lg sm:text-center',
                                    {
                                        'border shadow-md shadow-blue-900 border-blue-500': SUBSCRIPTION
                                            ? product.name === SUBSCRIPTION.prices.products.name
                                            : product.name === 'Free'
                                    }
                                )}
                            >
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold leading-6 text-white">
                                        {product.name}
                                    </h2>
                                    <p className="mt-4 font-bold text-zinc-300">{product.description}</p>
                                    <ul className="p-5 text-zinc-300">
                                        {product.features.map((feature, index) =>
                                            <li className="" key={index}>{feature}</li>
                                        )}
                                    </ul>
                                    <p className="mt-8">
                                        <span className="text-5xl font-extrabold text-white">
                                            {priceString}
                                        </span>
                                        <span className="text-base font-medium text-zinc-100">
                                            /{billingInterval}
                                        </span>
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => handleCheckout(product.name)}
                                        className="mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white ring-2 hover:bg-blue-500 hover:ring-0"
                                    >
                                        {product.name === SUBSCRIPTION.prices.products.name
                                            ? 'Subscribe'
                                            : 'Get Started'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="m-auto mt-20 w-1/3 rounded-xl bg-zinc-700">
                    <p className="pt-5 text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                        Powered by
                    </p>
                    <div className="flex flex-col items-center space-y-4 p-5 sm:mt-8 sm:gap-6 sm:space-y-0 md:mx-auto md:max-w-2xl">
                        <div>
                            <a href="https://stripe.com" aria-label="stripe.com Link">
                                <Image
                                    src="/stripe.svg"
                                    alt="stripe.com Logo"
                                    className="text-white"
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </div>
                        <div>
                            <a href="https://vercel.com" aria-label="Vercel.com Link">
                                <Image
                                    src="/vercel.svg"
                                    alt="Vercel.com Logo"
                                    className="text-white"
                                    width={100}
                                    height={100}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}