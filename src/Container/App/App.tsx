import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Header from 'Container/Header/Header'
import HeaderTop from 'Container/Header/HeaderTop'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <HeaderTop />
                <Header />
            </StyledEngineProvider>
        </>
    )
}
export default App
