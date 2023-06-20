import Banner from 'components/Banner/Banner'
import CartTotal from 'components/CartTotal/CartTotal'
import { Container } from '@mui/material'
import CartProductLict from 'components/CartProductList/CartProductLict'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtende'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CardPage = ({ productsInCart }: Props) => {
    return (
        <>
            <Banner />
            <Container>
                <div>
                    <CartProductLict
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                    <CartTotal productsInCart={productsInCart} />
                </div>
            </Container>
        </>
    )
}

export default CardPage
