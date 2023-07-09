import { AppBar } from '@mui/material'
import text_banner from 'assets/text_banner.jpg'

type Props = {}

const TextBanner = (props: Props) => {
    return (
        <>
            <AppBar position="static">
                <img src={text_banner} alt="fake banner" />
            </AppBar>
        </>
    )
}

export default TextBanner
