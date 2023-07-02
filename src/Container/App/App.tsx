import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import HeaderTop from 'Container/Header/HeaderTop'
import ArticlePage from 'components/Article/ArticlePage'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import Shop from 'components/Shop/Shop'
import ShopFruits from 'components/ShopFruits/ShopFruits'
import ShopVegetables from 'components/ShopVegetables/ShopVegetables'
import CardPage from 'pages/CardPage/CardPage'
import Home from 'pages/Home/Home'
import Title from 'pages/Title/Title'
import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

type ProductsInCart = {
    [id: number]: number
}

type Context = {
    removeProoductFromCart: (id: number) => void
    changeProductQuatity: (id: number, count: number) => void
}

export const AppContext = createContext<Context | null>(null)

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
    const removeProoductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductInCart = { ...prevState }
            delete prevProductInCart[id]
            return prevProductInCart
        })
    }

    const changeProductQuatity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <AppContext.Provider
                    value={{
                        removeProoductFromCart: removeProoductFromCart,
                        changeProductQuatity: changeProductQuatity,
                    }}
                >
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
                            path="/shop"
                            element={
                                <Shop AddProductToCart={AddProductToCart} />
                            }
                        />
                        <Route
                            path="/shop_fruits"
                            element={
                                <ShopFruits
                                    AddProductToCart={AddProductToCart}
                                />
                            }
                        />
                        <Route
                            path="/shop_vegetables"
                            element={
                                <ShopVegetables
                                    AddProductToCart={AddProductToCart}
                                />
                            }
                        />
                        <Route
                            path="/cart"
                            element={
                                <CardPage productsInCart={productsInCart} />
                            }
                        />
                        <Route path="/articles/:id" element={<ArticlePage />} />
                    </Routes>
                    <Footer />
                </AppContext.Provider>

                <ScrollToTop />
            </StyledEngineProvider>
        </>
    )
}
export default App
