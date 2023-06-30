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

    return <div>{articlesObject[parseInt(producId)].text}</div>
}

export default ArticlePage
