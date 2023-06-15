import ArticleList from 'components/Article/ArticleList'
import Slider from 'pages/Slider/Slider'
import Title from 'pages/Title/Title'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Title />
            <Slider />
            <ArticleList />
        </>
    )
}
export default Home
