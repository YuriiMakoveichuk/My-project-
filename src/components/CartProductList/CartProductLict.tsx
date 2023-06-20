import slidersArray, { Product, getProductsObject } from 'utils/slidersArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
}

const CartProductLict = ({
    productsInCart,
    productsObject = getProductsObject(slidersArray),
}: Props) => {
    return (
        <div className="card">
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].type}:
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}

export default CartProductLict
