import { AppBar } from '@mui/material'
import banner from 'assets/banner.jpg'

type Props = {}

const Banner = (props: Props) => {
    return (
        <>
            <AppBar position="static">
                <img src={banner} alt="fake banner" />
            </AppBar>
        </>
    )
}

export default Banner
