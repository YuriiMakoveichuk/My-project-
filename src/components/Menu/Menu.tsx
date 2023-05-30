import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu-header">
            <ul className="menu-header-btn">
                <li className="menu-header-btn-text">
                    <Button color="inherit">
                        Home <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                </li>
                <li>
                    <Button color="inherit">
                        Pages <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                </li>
                <li>
                    <Button color="inherit">
                        Portfolio
                        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                </li>
                <li>
                    <Button color="inherit">
                        Blog <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                </li>
                <li>
                    <Button color="inherit">
                        Shop <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                    </Button>
                </li>
                <li>
                    <Button color="inherit">Contact</Button>
                </li>
            </ul>
        </div>
    )
}
export default Menu
