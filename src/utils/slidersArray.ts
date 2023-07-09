export type Product = {
    id: number
    title: string
    type: string
    price: number
    category?: string
}

const slidersArray: Product[] = [
    {
        id: 1,
        title: './images/broccoli.png',
        type: 'Organic Broccoli',
        price: 18.0,
        category: 'vegetables',
    },
    {
        id: 2,
        title: './images/strawberry.png',
        type: 'Fresh Carrots',
        price: 25.0,
        category: 'fruits',
    },
    {
        id: 3,
        title: './images/croissant.png',
        type: 'Ripe Strawberries',
        price: 49.58,
    },
    {
        id: 4,
        title: './images/orange.png',
        type: 'Organic orange',
        price: 55.0,
        category: 'fruits',
    },
    {
        id: 5,
        title: './images/garnet.png',
        type: 'Fresh Organic',
        price: 83.5,
        category: 'fruits',
    },
    {
        id: 6,
        title: './images/strawberry.png',
        type: 'Fresh Carrots',
        price: 25.0,
        category: 'fruits',
    },
    {
        id: 7,
        title: './images/broccoli.png',
        type: 'Organic Broccoli',
        price: 18.0,
        category: 'vegetables',
    },
    {
        id: 8,
        title: './images/garnet.png',
        type: 'Fresh Organic',
        price: 83.5,
        category: 'fruits',
    },
    {
        id: 9,
        title: './images/broccoli.png',
        type: 'Organic carrot',
        price: 55.0,
        category: 'vegetables',
    },
    {
        id: 10,
        title: './images/strawberry.png',
        type: 'Organic grape',
        price: 55.0,
        category: 'fruits',
    },
    {
        id: 11,
        title: './images/broccoli.png',
        type: 'Organic peas',
        price: 55.0,
        category: 'vegetables',
    },
    {
        id: 12,
        title: './images/orange.png',
        type: 'Ripe Strawberries',
        price: 55.0,
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default slidersArray
