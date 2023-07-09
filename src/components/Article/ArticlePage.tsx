import { Container } from '@mui/material'
import TextBanner from 'components/Banner/TextBanner'
import Reviews from 'components/Reviews/Reviews'
import { useParams } from 'react-router-dom'
import articlesArray, { getArticlesObject } from 'utils/articlesArray'
import { Article } from 'utils/articlesArray'

type Props = {
    articlesObject?: {
        [id: number]: Article
    }
}

const ArticlePage = ({
    articlesObject = getArticlesObject(articlesArray),
}: Props) => {
    const { id } = useParams()
    const producId = id || ''

    return (
        <>
            <TextBanner />
            <Container>
                <div className="article-page">
                    {articlesObject[parseInt(producId)].text}
                    <div className="article-page-text">
                        {articlesObject[parseInt(producId)].ontext}
                    </div>
                </div>
                <Reviews />
            </Container>
        </>
    )
}

export default ArticlePage
