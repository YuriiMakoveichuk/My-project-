import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'

type Props = {
    title: string
    type: string
    price: number
}

const SliderListItem = ({ title, type, price }: Props) => {
    return (
        <>
            <Card className="swiper-card">
                <CardActionArea>
                    <div className="swiper-icons">
                        <FavoriteBorderIcon
                            fontSize="medium"
                            className="swiper-like"
                        ></FavoriteBorderIcon>
                        <VisibilityIcon
                            fontSize="medium"
                            className=" swiper-like swiper-visibility"
                        ></VisibilityIcon>
                        <Button className="swiper-btn" variant="contained">
                            Add to cart +
                        </Button>
                    </div>
                    <CardMedia
                        className="swiper-img"
                        component="img"
                        image={title}
                        alt="fruit"
                    />
                    <Typography component="legend"></Typography>
                    <Rating name="customized-10" defaultValue={2} max={5} />
                    <CardContent>
                        <Typography
                            className="swiper-text"
                            gutterBottom
                            component="div"
                        >
                            {type}
                        </Typography>
                        <Typography
                            className="swiper-text"
                            variant="body2"
                            color="text.secondary"
                        >
                            {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            t
        </>
    )
}

export default SliderListItem
