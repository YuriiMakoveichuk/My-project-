import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Quatity from 'components/Quantity/Quatity'
import { useState } from 'react'

type Props = {
    id: number
    title: string
    type: string
    price: number
    AddProductToCart: (id: number, count: number) => void
}

const ShopListItem = ({ id, title, type, price, AddProductToCart }: Props) => {
    const [count, setCount] = useState<number>(1)
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    return (
        <>
            <Card className="shoping-card">
                <CardMedia
                    className="swiper-img"
                    component="img"
                    image={title}
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
                            {type}
                        </Typography>
                        <Typography
                            className="swiper-text"
                            variant="body2"
                            color="text.secondary"
                        >
                            $ {price}
                        </Typography>

                        <Quatity
                            count={count}
                            onDecrementClick={onDecrementClick}
                            onIncrementClick={onIncrementClick}
                            minCount={1}
                        />

                        <Button
                            className="swiper-btn"
                            variant="contained"
                            onClick={() => AddProductToCart(id, count)}
                        >
                            Add to cart
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default ShopListItem
