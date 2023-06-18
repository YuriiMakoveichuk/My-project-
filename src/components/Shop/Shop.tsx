import Banner from 'components/Banner/Banner'
import ShopList from './ShopList'
import { Container, Typography } from '@mui/material'
import './Shop.scss'

type Props = {}

const Shop = (props: Props) => {
    return (
        <>
            <Banner />
            <Container>
                <div className="shop-header">
                    <Typography className="title-menu-header">
                        Welcome to Munfirm
                    </Typography>
                    <Typography className="title-menu-organic">
                        Organic Foods & Vegetables
                    </Typography>
                </div>
            </Container>
            <ShopList />
        </>
    )
}

export default Shop
