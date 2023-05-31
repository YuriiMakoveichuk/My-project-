import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Header from 'Container/Header/Header'
import HeaderTop from 'Container/Header/HeaderTop'
import Main from 'Container/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />

                <HeaderTop />
                <Header />
                <Main />
            </StyledEngineProvider>
        </>
    )
}
export default App
