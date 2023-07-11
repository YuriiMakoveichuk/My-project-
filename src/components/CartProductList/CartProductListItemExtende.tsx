import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Button } from '@mui/material'
import { Product } from 'utils/slidersArray'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import Quatity from 'components/Quantity/Quatity'

type Props = {
    product: Product
    productCount: number
    id: number
}

const CartProductListItemExtended = ({ id, product, productCount }: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )
    const dispatch = useAppDispatch()

    const data = useContext(AppContext)

    return (
        <>
            <Card className="shoping-card">
                <Button
                    className="shoping-like"
                    onClick={() =>
                        dispatch({
                            type: 'TOGGLE_LIKE',
                            id: product.id,
                        })
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <CardMedia
                    className="swiper-img shoping-img"
                    component="img"
                    image={product.title}
                    alt="fruit"
                />
                <div className="shop-card">
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
                            Count: {productCount}
                        </Typography>
                        <Typography
                            className="swiper-text"
                            variant="body2"
                            color="text.secondary"
                        >
                            Price: $ {product.price}
                        </Typography>
                        <Quatity
                            count={productCount}
                            onDecrementClick={() =>
                                productCount === 1
                                    ? data?.removeProoductFromCart(product.id)
                                    : data?.changeProductQuatity(
                                          product.id,
                                          productCount - 1
                                      )
                            }
                            onIncrementClick={() =>
                                data?.changeProductQuatity(
                                    product.id,
                                    productCount + 1
                                )
                            }
                            minCount={0}
                        />
                        <Button
                            className="card-page-btn"
                            onClick={() =>
                                data?.removeProoductFromCart(product.id)
                            }
                        >
                            <DeleteOutlineOutlinedIcon />
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </>
    )
}

export default CartProductListItemExtended
