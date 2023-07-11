import Banner from 'components/Banner/Banner'
import CartTotal from 'components/CartTotal/CartTotal'
import { Container, Grid } from '@mui/material'
import CartProductLict from 'components/CartProductList/CartProductLict'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtende'
import Button from '@mui/material/Button'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import './CardPage.scss'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    id: number
}
type Order = {
    name: string
    phone: string
    address: string
}

const CardPage = ({ id, productsInCart }: Props) => {
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        phone: '',
        address: '',
    })

    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            phone: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    phone: orderData.phone,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, phone, address }) => {
                setOrderData({ name, phone, address })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form className="card-page-form" onSubmit={onSend}>
                <Typography className="card-page-form-text">
                    Checkout
                </Typography>
                <Typography className="card-page-text" variant="h4">
                    Checkout
                </Typography>
                <div className="card-page-input">
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    ></TextField>
                </div>
                <div className="card-page-input">
                    <TextField
                        size="small"
                        placeholder="Your phone"
                        value={orderData.phone}
                        onChange={handlePhone}
                    ></TextField>
                </div>
                <div className="card-page-input">
                    <TextField
                        size="small"
                        placeholder="Your address"
                        value={orderData.address}
                        onChange={handleAddress}
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
        // const refresh = () => {
        //     window.location.reload()
        // }
        return (
            <>
                <div>
                    <div>Dear, {orderData.name} thanks for your order</div>
                    <div>{orderData.phone} for communication</div>
                    <div>
                        Delivery of the order to the address:{' '}
                        {orderData.address}
                    </div>
                </div>
                <Button
                    className="reviews-btn"
                    type="submit"
                    //  onClick={refresh}
                >
                    <NavLink to={'/shop'}>Go to Shop</NavLink>
                </Button>
            </>
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
