import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Button } from '@mui/material'
import { Product } from 'utils/slidersArray'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import Quatity from 'components/Quantity/Quatity'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const data = useContext(AppContext)

    return (
        <>
            <Card className="shoping-card">
                <CardMedia
                    className="swiper-img"
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
