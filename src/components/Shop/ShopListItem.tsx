import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Quatity from 'components/Quantity/Quatity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

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

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <>
            <Card className="shoping-card">
                <Button
                    className="shoping-like"
                    onClick={() =>
                        dispatch({
                            type: 'TOGGLE_LIKE',
                            id,
                        })
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <CardMedia
                    className="swiper-img shoping-img"
                    component="img"
                    image={title}
                    alt="fruit"
                />
                <div className="shop-card">
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
