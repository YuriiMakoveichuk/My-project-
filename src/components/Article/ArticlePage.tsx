import { Container } from '@mui/material'
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
        <Container>
            <>
                <div className="pdp">
                    {articlesObject[parseInt(producId)].text}
                    <div className="pdpddbn">
                        {articlesObject[parseInt(producId)].ontext}
                    </div>
                </div>
                <Reviews />
            </>
        </Container>
    )
}

export default ArticlePage
