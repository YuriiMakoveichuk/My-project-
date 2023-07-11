import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import CartHeader from 'components/CartHeader/CartHeader'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Register from 'components/Register/Register'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    const [basket, setBasket] = useState<string>('header-cartheader')

    const changeBasket = () => {
        setBasket((prevState) =>
            prevState === 'header-cartheader'
                ? 'header-cartheader-open'
                : 'header-cartheader'
        )
    }

    return (
        <AppBar position="sticky" className="app-bar">
            <Container className="header-padding">
                <Toolbar className="header-height">
                    <Logo />
                    <Menu />

                    <div className="header-menu-shop">
                        <ul className="header-menu-basket">
                            <li>
                                <Button
                                    className="register-btn"
                                    onClick={() => changeBasket()}
                                >
                                    <ShoppingBasketSharpIcon />
                                </Button>

                                <div className={basket}>
                                    <div className="header-cartheader-close">
                                        <Button
                                            className="register-btn"
                                            onClick={() => changeBasket()}
                                        >
                                            <HighlightOffIcon />
                                        </Button>
                                    </div>
                                    <CartHeader
                                        productsInCart={productsInCart}
                                    />
                                    <Button
                                        className="swiper-btn cartheader-btn"
                                        variant="contained"
                                        onClick={() => changeBasket()}
                                    >
                                        <NavLink to={'/cart'}>
                                            Visit to Cart
                                        </NavLink>
                                    </Button>
                                </div>
                            </li>
                        </ul>
                        <Register />
                    </div>

                    <Button variant="contained" className="header-btn">
                        Consultations
                        <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                    </Button>

                    <div className="header-buy-point">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
