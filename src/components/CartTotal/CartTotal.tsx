import { colors } from '@mui/material'
import { SassColor } from 'sass'
import slidersArray, { Product, getProductsObject } from 'utils/slidersArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(slidersArray),
}: Props) => {
    return (
        <div>
            Total: $
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
        </div>
    )
}

export default CartTotal
