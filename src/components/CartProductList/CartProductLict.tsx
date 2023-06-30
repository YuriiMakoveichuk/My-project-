import slidersArray, { Product, getProductsObject } from 'utils/slidersArray'
import CartProductListItem from './CartProductListItem'
import { Grid } from '@mui/material'

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
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <Grid item xs={12} sm={6} md={3}>
                    <CartItem
                        key={productId}
                        product={productsObject[parseInt(productId)]}
                        productCount={productsInCart[parseInt(productId)]}
                    />
                </Grid>
            ))}
        </>
    )
}

export default CartProductLict
