import Banner from 'components/Banner/Banner'
import CartTotal from 'components/CartTotal/CartTotal'
import { Container, Grid } from '@mui/material'
import CartProductLict from 'components/CartProductList/CartProductLict'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtende'
import Button from '@mui/material/Button'
import { TextField, Typography } from '@mui/material'

import './CardPage.scss'
import { useState } from 'react'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
type Order = {
    name: string
    phone: number
    address: string
}

const CardPage = ({ productsInCart }: Props) => {
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        phone: 0,
        address: '',
    })

    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const renderForm = () => {
        return (
            <form className="card-page-form">
                <Typography className="card-page-form-text">
                    Checkout
                </Typography>
                <Typography className="card-page-text" variant="h4">
                    Checkout
                </Typography>
                <div className="card-page-input">
                    <TextField size="small" placeholder="Your name"></TextField>
                </div>
                <div className="card-page-input">
                    <TextField
                        size="small"
                        placeholder="Your phone"
                    ></TextField>
                </div>
                <div className="card-page-input">
                    <TextField
                        size="small"
                        placeholder="Your address"
                    ></TextField>
                </div>
                <Button
                    className="reviews-btn"
                    variant="outlined"
                    type="submit"
                >
                    Send
                </Button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for your order</div>
                <div>{orderData.phone} for communication</div>
                <div>
                    Delivery of the order to the address: {orderData.address}
                </div>
            </div>
        )
    }

    return (
        <>
            <Banner />
            <Container>
                <Typography
                    className="card-text"
                    variant="h3"
                    textAlign={'center'}
                >
                    You order
                </Typography>
                <Grid container spacing={4} className="card-page">
                    <CartProductLict
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <Typography className="card-text" variant="h4">
                    <CartTotal productsInCart={productsInCart} />
                </Typography>
                {isOrderSend ? renderMessage() : renderForm()}
            </Container>
        </>
    )
}

export default CardPage
