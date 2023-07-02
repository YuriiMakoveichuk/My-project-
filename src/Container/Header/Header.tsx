import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'
import CartHeader from 'components/CartHeader/CartHeader'
import './Header.scss'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { NavLink } from 'react-router-dom'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Header = ({ productsInCart }: Props) => {
    return (
        <AppBar position="sticky" className="app-bar">
            <Container className="header-padding">
                <Toolbar className="header-height">
                    <Logo />
                    <Menu />

                    <div className="header-menu-shop">
                        <ul className="header-menu-basket">
                            <li>
                                <ShoppingBasketSharpIcon></ShoppingBasketSharpIcon>
                                <div className="header-cartheader">
                                    <CartHeader
                                        productsInCart={productsInCart}
                                    />
                                    <Button
                                        className="swiper-btn cartheader-btn"
                                        variant="contained"
                                    >
                                        <NavLink to={'/cart'}>
                                            Visit to Cart
                                        </NavLink>
                                    </Button>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <AccountCircleSharpIcon></AccountCircleSharpIcon>
                            </li>
                        </ul>
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
