import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu-header">
            <ul className="menu-header-btn">
                <li className="menu-header-btn-text">
                    <Button color="inherit" className="home-menu">
                        Home <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <ul className="header-home-menu">
                        <li>
                            <a href="">
                                <span> - Home 1</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Home 2</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Home 3</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="pages-header-btn-text">
                    <Button color="inherit" className="pages-menu">
                        Pages <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <ul className="header-home-menu">
                        <li>
                            <a href="">
                                <span> - About Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Our Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>- Service Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - FAQs</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Farmers</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - 404Error</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="portfolio-header-btn-text">
                    <Button color="inherit" className="portfolio-menu">
                        Portfolio
                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <ul className="header-home-menu">
                        <li>
                            <a href="">
                                <span>- Portfolio Grid</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>- Portfolio Fluid</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>- Portfolio Details</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="blog-header-btn-text">
                    <Button color="inherit" className="blog-menu">
                        Blog <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <ul className="header-home-menu">
                        <li>
                            <a href="">
                                <span> - Blog Gird</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>- Blog Standart</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Blog Detials</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="shop-header-btn-text">
                    <Button color="inherit" className="shop-menu">
                        Shop <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                    <ul className="header-home-menu">
                        <li>
                            <a href="">
                                <span> - Shop Grid</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Our Shop</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>- Cart</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Wishlist</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span> - Checkout</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>- Product Details</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Button color="inherit">Contact</Button>
                </li>
            </ul>
        </div>
    )
}
export default Menu
