import { Container, Grid, Typography } from '@mui/material'
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
                    {articlesArray.map(({ id, title, type, text }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ArticleListItem
                                title={title}
                                type={type}
                                text={text}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default ArticleList
