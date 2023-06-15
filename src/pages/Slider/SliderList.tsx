import slidersArray from 'utils/slidersArray'
import SliderListItem from './SliderListItem'
import { SwiperSlide } from 'swiper/react'

type Props = {}

const SliderList = (props: Props) => {
    return (
        <>
            {slidersArray.map(({ title, type, price }) => (
                <SliderListItem title={title} type={type} price={price} />
            ))}
        </>
    )
}

export default SliderList
