import ArticleList from 'components/Article/ArticleList'
import Reviews from 'components/Reviews/Reviews'
import Slider from 'pages/Slider/Slider'
import Title from 'pages/Title/Title'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Title />
            <Slider />
            <ArticleList />
            <Reviews />
        </>
    )
}
export default Home
