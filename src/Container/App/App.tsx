import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import HeaderTop from 'Container/Header/HeaderTop'
import Shop from 'components/Shop/Shop'
import ShopFruits from 'components/ShopFruits/ShopFruits'
import ShopVegetables from 'components/ShopVegetables/ShopVegetables'
import CardPage from 'pages/Contact/CardPage'
import Home from 'pages/Home/Home'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />

                <HeaderTop />
                <Header cartData={cartData} />

                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/contact" element={<CardPage />} />
                    </Routes>
                </Container>
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/shop_fruits" element={<ShopFruits />} />
                    <Route
                        path="/shop_vegetables"
                        element={<ShopVegetables />}
                    />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
