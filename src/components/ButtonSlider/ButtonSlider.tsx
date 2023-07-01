import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'

import { NavLink } from 'react-router-dom'

type Props = {}

const ButtonSlider = (props: Props) => {
    return (
        <div className="swiper-icons">
            <FavoriteBorderIcon
                fontSize="medium"
                className="swiper-like"
            ></FavoriteBorderIcon>
            <VisibilityIcon
                fontSize="medium"
                className=" swiper-like swiper-visibility"
            ></VisibilityIcon>

            <Button
                className="swiper-btn swiper-margin-btn "
                variant="contained"
            >
                <NavLink to={'/shop'}>Visit to Shop</NavLink>
            </Button>
        </div>
    )
}

export default ButtonSlider
