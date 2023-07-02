import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu-header">
            <ul className="menu-header-btn">
                <li className="menu-header-btn-text">
                    <Button color="inherit" className="home-menu">
                        <NavLink to={'/'}>Home</NavLink>
                    </Button>
                </li>

                <li className="blog-header-btn-text">
                    <Button color="inherit" className="blog-menu">
                        <NavLink to={'/blog'}>Blog</NavLink>
                    </Button>
                </li>
                <li className="shop-header-btn-text">
                    <Button color="inherit" className="shop-menu">
                        <NavLink to={'/shop'}>Shop</NavLink>

                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <ul className="header-home-menu">
                        <li>
                            <Button>
                                <NavLink to={'/shop'}> - Shop</NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <NavLink to={'/shop_vegetables'}>
                                    - Vegetables
                                </NavLink>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <NavLink to={'/shop_fruits'}>- Fruits</NavLink>
                            </Button>
                        </li>
                    </ul>
                </li>
                <li>
                    <Button color="inherit">
                        <NavLink to={'/cart'}> Cart</NavLink>
                    </Button>
                </li>
            </ul>
        </div>
    )
}
export default Menu
