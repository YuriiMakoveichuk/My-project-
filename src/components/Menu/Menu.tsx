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
                            <a href="foo">
                                <span> - Home 1</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - Home 2</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
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
                            <a href="foo">
                                <span> - About Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - Our Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span>- Service Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - FAQs</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - Farmers</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
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
                            <a href="foo">
                                <span>- Portfolio Grid</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span>- Portfolio Fluid</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
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
                            <a href="foo">
                                <span> - Blog Gird</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span>- Blog Standart</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
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
                            <a href="foo">
                                <span> - Shop Grid</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - Our Shop</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span>- Cart</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - Wishlist</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
                                <span> - Checkout</span>
                            </a>
                        </li>
                        <li>
                            <a href="foo">
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
