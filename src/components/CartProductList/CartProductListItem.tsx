import { Product } from 'utils/slidersArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.type}:{productCount}
        </div>
    )
}

export default CartProductListItem
