import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import HeaderTop from 'Container/Header/HeaderTop'
import Shop from 'components/Shop/Shop'
import ShopFruits from 'components/ShopFruits/ShopFruits'
import ShopVegetables from 'components/ShopVegetables/ShopVegetables'
import CardPage from 'pages/CardPage/CardPage'
import Home from 'pages/Home/Home'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })

    const AddProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />

                <HeaderTop />
                <Header productsInCart={productsInCart} />

                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
                <Routes>
                    <Route
                        path="/contact"
                        element={<CardPage productsInCart={productsInCart} />}
                    />

                    <Route
                        path="/shop"
                        element={<Shop AddProductToCart={AddProductToCart} />}
                    />
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
