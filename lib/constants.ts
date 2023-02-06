export const PRODUCTS = [{
    id: 1,
    name: 'Free',
    description: 'Just want a trial?',
    features: [
        "Free content store",
        "Upto 50+ users",
        "Admin dashboard",
        "User insights"
    ],
    prices: [{
        id: 1,
        product_id: '1',
        active: true,
        unit_amount: 0,
        currency: 'GBP',
        interval: 'month',
        products: {
            name: 'Free',
        },
    },
    {
        id: 2,
        product_id: '1',
        active: true,
        unit_amount: 0,
        currency: 'GBP',
        interval: 'year',
        products: {
            name: 'Free',
        }
    }],
},
{
    id: 2,
    name: 'Startup',
    description: 'Start your business',
    features: [
        "All the free features",
        "Unlimited users",
        "Payment system",
        "and more",
    ],
    prices: [{
        id: 1,
        product_id: '2',
        active: true,
        unit_amount: 999,
        currency: 'GBP',
        interval: 'month',
        products: {
            name: 'Startup',
        }
    }, {
        id: 2,
        product_id: '2',
        active: true,
        unit_amount: 8999,
        currency: 'GBP',
        interval: 'year',
        products: {
            name: 'Startup',
        }
    }]
}]

export const SUBSCRIPTION = {
    prices: {
        products: {
            name: 'Startup',
        }
    }
}