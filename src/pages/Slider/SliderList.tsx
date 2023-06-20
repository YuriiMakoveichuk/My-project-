import slidersArray from 'utils/slidersArray'
import SliderListItem from './SliderListItem'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

const SliderList = (props: Props) => {
    return (
        <>
            <SwiperSlide>
                {slidersArray.map(({ title, type, price }) => (
                    <SwiperSlide>
                        <SliderListItem
                            title={title}
                            type={type}
                            price={price}
                        />
                    </SwiperSlide>
                ))}
            </SwiperSlide>
        </>
    )
}

export default SliderList
