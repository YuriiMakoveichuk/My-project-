import { Container, Grid, Typography } from '@mui/material'

import ArticleListItem from './ArticleListItem'

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
                        <ArticleListItem title="post19" />
                    </Grid>
                    <Grid item md={4}>
                        <ArticleListItem title="post10" />
                    </Grid>
                    <Grid item md={4}>
                        <ArticleListItem title="post20" />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ArticleList
