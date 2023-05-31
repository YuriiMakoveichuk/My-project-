import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Button, CardActionArea, CardActions } from '@mui/material'
import post19 from 'assets/post19.jpg'
import post10 from 'assets/post10.jpg'
import post20 from 'assets/post20.jpg'
import './ArticleListItem.scss'

type Props = {
    title: string
}

const ArticleListItem = (props: Props) => {
    return (
        <Card sx={{ maxWidth: 390 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    src={props.title}
                    alt="Fake-shop logo"
                />
                <CardContent>
                    <Typography className="article-text">Vegetable</Typography>

                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="article-title"
                    >
                        Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className="article-btn">
                    Read more
                    <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArticleListItem
