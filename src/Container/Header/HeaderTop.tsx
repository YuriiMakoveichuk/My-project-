import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

import './HeaderTop.scss'

type Props = {}
const HeaderTop = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar-top">
            <Container className="header-padding">
                <Toolbar className="header-top-height">
                    <div className="header-first">
                        <div className="header-top">
                            <ul className="header-top-menu">
                                <li>
                                    <EmailIcon></EmailIcon>
                                    <a href="support@gmail.com">
                                        Email Us : support@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <AccessTimeIcon></AccessTimeIcon>
                                    <a href="">
                                        Working Hours : Monday - Friday, 08 am -
                                        05 pm
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-top-icons">
                            <li>
                                <PhoneEnabledIcon></PhoneEnabledIcon>
                                <a href="+012 (345) 67899">
                                    Call : +012 (345) 67899
                                </a>
                            </li>

                            <a href="">
                                <FacebookIcon></FacebookIcon>
                            </a>
                            <a href="">
                                <TwitterIcon></TwitterIcon>
                            </a>
                            <a href="">
                                <YouTubeIcon></YouTubeIcon>
                            </a>
                            <a href="">
                                <InstagramIcon></InstagramIcon>
                            </a>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default HeaderTop
