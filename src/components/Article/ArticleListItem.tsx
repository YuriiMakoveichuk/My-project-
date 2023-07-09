import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

import './ArticleListItem.scss'

type Props = {
    title: string
    type: string
    text: string
    id: number
}

const ArticleListItem = ({ title, type, text, id }: Props) => {
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
                <CardActionArea className="article-menu">
                    <Typography className="article-text">{type}</Typography>

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

                    <CardActions>
                        <Button className="article-btn">
                            <Link to={`/articles/${id}`}>Read more</Link>
                            <KeyboardDoubleArrowRightIcon />
                        </Button>
                    </CardActions>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}
export default ArticleListItem
