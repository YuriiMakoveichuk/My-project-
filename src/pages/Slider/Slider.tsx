import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import SliderList from './SliderList'
import './Slider.scss'
import 'swiper/css'
import 'swiper/css/pagination'

type Props = {}

const Slider = (props: Props) => {
    return (
        <>
            <Container>
                <Typography className="slider-header">
                    Best Foods For Family
                </Typography>
                <Typography className="slider-header-text">
                    Best Foods For Family
                </Typography>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={-1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                    <SwiperSlide />
                </Swiper>
            </Container>
        </>
    )
}
export default Slider
