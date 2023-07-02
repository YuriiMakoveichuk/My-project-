import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Button, Typography } from '@mui/material'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import fruits1 from 'assets/fruits1.png'
import organic1 from 'assets/organic1.png'
import fruits2 from 'assets/fruits2.png'
import './Title.scss'

type Props = {}

const Title = (props: Props) => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {' '}
                    <div className="title-menu ">
                        <div>
                            <Typography className="title-menu-header">
                                Welcome to Munfirm
                            </Typography>
                            <Typography className="title-menu-organic">
                                Organic Foods & Vegetables
                            </Typography>
                            <Typography className="title-menu-years">
                                25 Years of experience in agriculture farming
                            </Typography>
                            <div className="title-btn">
                                <Button className="title-menu-btm btn-shop">
                                    Shop Now
                                    <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                                </Button>
                                <Button className="title-menu-btm btn-more">
                                    Learn More
                                    <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                                </Button>
                            </div>
                        </div>
                        <div className="title-fruits">
                            <Typography className="title-fruits-organic">
                                <img src={organic1} alt="Fake-shop logo" />
                            </Typography>
                            <Typography className="title-fruits-img">
                                <img src={fruits1} alt="Fake-shop logo" />
                            </Typography>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="title-menu ">
                        <div className="title-fruits">
                            <Typography className="title-fruits-organic fruits2-organic2">
                                <img src={organic1} alt="Fake-shop logo" />
                            </Typography>
                            <Typography className="title-fruits-img">
                                <img src={fruits2} alt="Fake-shop logo" />
                            </Typography>
                        </div>
                        <div className="title-menu-text">
                            <Typography className="title-menu-header">
                                Welcome to Munfirm
                            </Typography>
                            <Typography className="title-menu-organic">
                                Organic Foods & Vegetables
                            </Typography>
                            <Typography className="title-menu-years">
                                25 Years of experience in agriculture farming
                            </Typography>
                            <div className="title-btn">
                                <Button className="title-menu-btm btn-shop">
                                    Shop Now
                                    <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                                </Button>
                                <Button className="title-menu-btm btn-more">
                                    Learn More
                                    <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* <Container>
               
               
            </Container> */}
        </>
    )
}
export default Title
