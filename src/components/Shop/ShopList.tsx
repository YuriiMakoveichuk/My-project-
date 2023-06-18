import { Container, Grid } from '@mui/material'
import ShopListItem from './ShopListItem'
import slidersArray from 'utils/slidersArray'

type Props = {}

const ShopList = (props: Props) => {
    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    {slidersArray.map(({ title, type, price, id }) => (
                        <Grid item xs={12} sm={6} md={3} key={id}>
                            <ShopListItem
                                title={title}
                                type={type}
                                price={price}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default ShopList
