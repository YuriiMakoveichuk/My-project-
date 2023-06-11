import Home from 'pages/Home/Home'
import Slider from 'pages/Slider/Slider'
import Title from 'pages/Title/Title'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Title />
            <Slider />
            <Home />
        </>
    )
}

export default Main
