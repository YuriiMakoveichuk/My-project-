import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
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
            <Card className="swiper-card">
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
                        <div className="shop-card-quantity">
                            <Button
                                variant="outlined"
                                onClick={() => onDecrementClick()}
                                disabled={count <= 1}
                            >
                                -
                            </Button>
                            <TextField value={count} size="small" />
                            <Button
                                variant="outlined"
                                onClick={() => onIncrementClick()}
                                disabled={count >= 50}
                            >
                                +
                            </Button>
                        </div>
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
