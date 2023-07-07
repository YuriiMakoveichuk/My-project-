export type Article = {
    id: number
    title: string
    type: string
    text: string
    ontext: string
}

const articlesArray: Article[] = [
    {
        id: 1,
        title: '/images/post19.jpg',
        type: 'Vegetable',
        text: 'Unicode UTF8 Character Sets They Sltimate Guide Systems',
        ontext: '"Yurii."Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error vel voluptas natus amet delectus iure quia repellendus nemo non nisi eos ut nam eius dolorum quos voluptatum, fuga accusantium.</div><div>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error vel voluptas natus amet delectus iure quia repellendus nemo non nisi eos ut nam eius dolorum quos voluptatum, fuga accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error vel voluptas natus amet delectus iure quia repellendus nemo non nisi eos ut nam eius dolorum quos voluptatum, fuga accusantium."</div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam error vel voluptas natus amet delectus iure quia repellendus nemo non nisi eos ut nam eius dolorum quos voluptatum, fuga accusantiu"div>',
    },
    {
        id: 2,
        title: '/images/post10.jpg',
        type: 'Farming',
        text: 'Quality Foods Requirments For Every Human Body’s',
        ontext: 'Yuliia',
    },
    {
        id: 3,
        title: '/images/post20.jpg',
        type: 'Organic Fruits',
        text: 'Choose Awesome Vegetables For Your Daily Life Routine',
        // description: '<div class="article-text-pars"></div>',
        ontext: 'wkqdmkmkmwkmkdmkmk',
    },
    {
        id: 4,
        title: '/images/post18.jpg',
        type: 'Vegetable',
        text: 'Unicode UTF8 Character Sets They Sltimate Guide Systems',
        // description: '<div class="article-text-pars"></div>',
        ontext: 'wkqdmkmkmwkmkdmkmk',
    },
    {
        id: 5,
        title: '/images/post17.jpg',
        type: 'Farming',
        text: 'Quality Foods Requirments For Every Human Body’s',
        // description: '<div class="article-text-pars"></div>',
        ontext: 'wkqdmkmkmwkmkdmkmk',
    },
    {
        id: 6,
        title: '/images/post16.jpg',
        type: 'Organic Fruits',
        text: 'Choose Awesome Vegetables For Your Daily Life Routine',
        // description: '<div class="article-text-pars"></div>',
        ontext: 'wkqdmkmkmwkmkdmkmk',
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
