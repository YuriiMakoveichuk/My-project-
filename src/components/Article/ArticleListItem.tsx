import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

import './ArticleListItem.scss'

type Props = {
    title: string
    type: string
    text: string
    id: number
}

const ArticleListItem = ({ title, type, text, id }: Props) => {
    const proLike = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card sx={{ maxWidth: 390 }}>
            <CardMedia
                className="article-image"
                component="img"
                height="240"
                src={title}
                alt="Fake-shop logo"
            />

            <CardContent>
                <div className="article-menu-text">
                    <Typography className="article-text">{type}</Typography>
                    <Button
                        className="article-menu-btn"
                        onClick={() =>
                            dispatch({
                                type: 'TOGGLE_LIKE',
                                id,
                            })
                        }
                    >
                        {proLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                </div>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="article-title"
                >
                    <Link to={`/articles/${id}`}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        ></div>
                    </Link>
                </Typography>

                <div className="article-button">
                    <Button className="article-btn">
                        <Link to={`/articles/${id}`}>Read more</Link>
                        <KeyboardDoubleArrowRightIcon />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ArticleListItem
