import { SwiperSlide } from 'swiper/react'
import SliderListItem from './SliderListItem'
import slidersArray from 'utils/slidersArray'

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
