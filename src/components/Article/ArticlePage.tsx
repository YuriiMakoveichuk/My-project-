import { Container } from '@mui/material'
import TextBanner from 'components/Banner/TextBanner'
import Reviews from 'components/Reviews/Reviews'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
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
    const articleId = id || ''
    const proLike = useAppSelector(
        (state) => state.productsLikeState[parseInt(articleId)]
    )
    const dispatch = useAppDispatch()
    return (
        <>
            <TextBanner />

            <Container>
                <div className="article-page">
                    <div className=" article-page-btn">
                        {articlesObject[parseInt(articleId)].text}
                        <Button
                            className="article-menu-btn article-page-button"
                            onClick={() =>
                                dispatch({
                                    type: 'TOGGLE_LIKE',
                                    id: parseInt(articleId),
                                })
                            }
                        >
                            {proLike ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                    </div>
                    <div className="article-page-text">
                        {articlesObject[parseInt(articleId)].ontext}
                    </div>
                </div>

                <Reviews />
            </Container>
        </>
    )
}

export default ArticlePage
