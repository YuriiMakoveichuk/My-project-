import { Container, Grid } from '@mui/material'
import ShopListItem from './ShopListItem'
import slidersArray from 'utils/slidersArray'

type Props = {
    AddProductToCart: (id: number, count: number) => void
}

const ShopList = ({ AddProductToCart }: Props) => {
    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    {slidersArray.map(({ title, type, price, id }) => (
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

export default ShopList
