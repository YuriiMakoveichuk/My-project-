import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Button, CardActionArea, CardActions } from '@mui/material'
import './ArticleListItem.scss'

type Props = {
    title: string
    type: string
    text: string
}

const ArticleListItem = ({ title, type, text }: Props) => {
    return (
        <Card sx={{ maxWidth: 390 }}>
            <CardMedia
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
                        {text}
                    </Typography>

                    <CardActions>
                        <Button className="article-btn">
                            Read more
                            <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                        </Button>
                    </CardActions>
                </CardActionArea>
            </CardContent>
        </Card>
    )
}
export default ArticleListItem
