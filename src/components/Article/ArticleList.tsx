import { Container, Grid, Typography } from '@mui/material'
import post19 from 'assets/post19.jpg'
import post10 from 'assets/post10.jpg'
import post20 from 'assets/post20.jpg'
import ArticleListItem from './ArticleListItem'
import articlesArray from 'utils/articlesArray'

type Props = {}

const ArticleList = (props: Props) => {
    return (
        <>
            <Container>
                <Typography className="article-header">
                    Read Article Tips
                </Typography>
                <Typography className="article-header-text">
                    Latest News & Blog
                </Typography>
                <Grid container spacing={4}>
                    <Grid item md={4}>
                        <ArticleListItem title={post19} />
                    </Grid>
                    <Grid item md={4}>
                        <ArticleListItem title={post10} />
                    </Grid>
                    <Grid item md={4}>
                        <ArticleListItem title={post20} />
                    </Grid>
                    {/* {articlesArray.map((article) => (
                        <Grid item md={4}>
                            <ArticleListItem title={props.title} />
                        </Grid>
                    ))} */}
                </Grid>
            </Container>
        </>
    )
}

export default ArticleList
