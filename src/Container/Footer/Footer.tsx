import { AppBar, Box, Container } from '@mui/material'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'
import Grid from '@mui/material/Grid'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PlaceIcon from '@mui/icons-material/Place'
import MailIcon from '@mui/icons-material/Mail'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'

import './Footer.scss'
import Logo from 'components/Logo/Logo'

type Props = {}

const ariaLabel = { 'aria-label': 'description' }

const Footer = (props: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar-footer">
                <Container>
                    <div className="footer-newsletter">
                        <div className="footer-newsletter-text">
                            <h2>Newsletter Subscribe</h2>
                        </div>
                        <div className="footer-botton">
                            <Box
                                className="footer-botton-inp"
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input
                                    className="footer-botton-inp-color"
                                    placeholder="Email Address"
                                    inputProps={ariaLabel}
                                />
                            </Box>
                            <Button variant="contained" className="header-btn">
                                Subscribe Now
                                <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                            </Button>
                        </div>
                    </div>

                    <Grid container className="footer-header">
                        <Grid item xs={4}>
                            <li className="footer-header-left">Quick Links</li>
                            <div className="footer-text">
                                <div>
                                    <li> About Us</li>
                                    <li>Documentation </li>
                                    <li>Services</li>
                                    <li>Elements</li>
                                    <li> Our Projects</li>
                                    <li> Best Products</li>
                                </div>
                                <div>
                                    <li> Meet Farmers</li>
                                    <li> Technology </li>
                                    <li>Latest News</li>
                                    <li> Contact Us</li>
                                    <li> Vegetables</li>
                                    <li> Setting & Privacy</li>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="footer-center">
                            <div className="footer-center-img">
                                <Logo />
                            </div>
                            <p>
                                Sit amet consectetur adipiscing elit sed eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. quis ipsum suspendisse ultrices gravida.
                            </p>
                            <div className="footer-center-icon">
                                <span>
                                    <FacebookOutlinedIcon fontSize="large" />
                                </span>
                                <span>
                                    <TwitterIcon fontSize="large" />
                                </span>
                                <span>
                                    <YouTubeIcon fontSize="large" />
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={4} className="footer-right">
                            <li className="footer-header-left">Contact Us </li>
                            <p>
                                Quis autem vel eum reprehenderit voluptate velit
                                esse quamnue
                            </p>
                            <li>
                                <span>
                                    <PlaceIcon />
                                </span>
                                53 Main Street, 2nd Mountain 3rd Floor, New York
                            </li>
                            <li>
                                <span>
                                    <PhoneEnabledIcon />
                                </span>
                                +012 (345) 678 99
                            </li>
                            <li>
                                <span>
                                    <MailIcon />
                                </span>
                                support@gmail.com
                            </li>
                        </Grid>
                    </Grid>

                    <div className="footer-botton-text">
                        Copyright © 2022 MunFirm. All Rights Reserved.
                    </div>
                </Container>
            </AppBar>
        </>
    )
}

export default Footer
