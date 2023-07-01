import { SwiperSlide } from 'swiper/react'
import SliderListItem from './SliderListItem'
import slidersArray from 'utils/slidersArray'

type Props = {}

const SliderList = (props: Props) => {
    return (
        <>
            {slidersArray.map(({ title, type, price }) => (
                <SwiperSlide>
                    <SliderListItem title={title} type={type} price={price} />
                </SwiperSlide>
            ))}
        </>
    )
}

export default SliderList
