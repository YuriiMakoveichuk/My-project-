export type Article = {
    id: number
    title: string
    type: string
    text: string
    description?: string
}

const articlesArray: Article[] = [
    {
        id: 1,
        title: '/images/post19.jpg',
        type: 'Vegetable',
        text: 'Unicode UTF8 Character Sets They Sltimate Guide Systems',
        description: '<div>skskk</div>',
    },
    {
        id: 2,
        title: '/images/post10.jpg',
        type: 'Farming',
        text: 'Quality Foods Requirments For Every Human Body’s',
    },
    {
        id: 3,
        title: '/images/post20.jpg',
        type: 'Organic Fruits',
        text: 'Choose Awesome Vegetables For Your Daily Life Routine',
    },
    {
        id: 4,
        title: '/images/post18.jpg',
        type: 'Vegetable',
        text: 'Unicode UTF8 Character Sets They Sltimate Guide Systems',
    },
    {
        id: 5,
        title: '/images/post17.jpg',
        type: 'Farming',
        text: 'Quality Foods Requirments For Every Human Body’s',
    },
    {
        id: 6,
        title: '/images/post16.jpg',
        type: 'Organic Fruits',
        text: 'Choose Awesome Vegetables For Your Daily Life Routine',
    },
]

export const getArticlesObject = (array: Article[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default articlesArray
