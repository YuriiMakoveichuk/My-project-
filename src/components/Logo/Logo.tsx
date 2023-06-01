import Typography from '@mui/material/Typography'
import logo from 'assets/logo.png'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography>
            <img width={149} height={56} src={logo} alt="Fake-shop logo" />
        </Typography>
    )
}
export default Logo
