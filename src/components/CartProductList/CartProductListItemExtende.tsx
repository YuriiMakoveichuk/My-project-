import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { Product } from 'utils/slidersArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <>
            <Card className="swiper-card">
                <CardMedia
                    className="swiper-img"
                    component="img"
                    image={product.title}
                    alt="fruit"
                />
                <div className="shop-card">
                    <Typography component="legend"></Typography>
                    <Rating name="customized-10" defaultValue={2} max={5} />
                    <CardContent>
                        <Typography
                            className="swiper-text"
                            gutterBottom
                            component="div"
                        >
                            {product.type}
                        </Typography>
                        <Typography
                            className="swiper-text"
                            variant="body2"
                            color="text.secondary"
                        >
                            $ {productCount}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default CartProductListItemExtended
