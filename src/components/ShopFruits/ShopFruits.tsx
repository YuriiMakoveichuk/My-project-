import Banner from 'components/Banner/Banner'
import slidersArray from 'utils/slidersArray'
import { Container, Grid, Typography } from '@mui/material'
import ShopListItem from 'components/Shop/ShopListItem'

type Props = {
    AddProductToCart: (id: number, count: number) => void
}

const ShopFruits = ({ AddProductToCart }: Props) => {
    return (
        <>
            <Banner />
            <Container>
                <div className="shop-header">
                    <Typography className="title-menu-header">
                        Welcome to Munfirm
                    </Typography>
                    <Typography className="title-menu-organic">
                        Organic Fruits
                    </Typography>
                </div>
                <Grid container spacing={4}>
                    {slidersArray
                        .filter((item) => item.category === 'fruits')
                        .map(({ title, type, price, id }) => (
                            <Grid item xs={12} sm={6} md={3} key={id}>
                                <ShopListItem
                                    id={id}
                                    title={title}
                                    type={type}
                                    price={price}
                                    AddProductToCart={AddProductToCart}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </>
    )
}

export default ShopFruits
