import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Header from 'Container/Header/Header'
import HeaderTop from 'Container/Header/HeaderTop'
import ContactPage from 'pages/Contact/ContactPage'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />

                <HeaderTop />
                <Header />

                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Container>
            </StyledEngineProvider>
        </>
    )
}
export default App
