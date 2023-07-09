import { Card, Container } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import blog_details from 'assets/blog_details.jpg'
import blogger from 'assets/blogger.jpg'
import Banner from 'components/Banner/Banner'

import './Blog.scss'
import Reviews from 'components/Reviews/Reviews'

type Props = {}

const Blog = (props: Props) => {
    return (
        <>
            <Banner />
            <Container>
                <div className="blog-text">
                    Unicode UTF8 & Character Sets The Sltimate Guide Systems
                    Vegetables & Foods
                </div>
                <div className="blog">
                    <CardMedia
                        className="blog-image"
                        sx={{
                            width: 800,
                        }}
                        component="img"
                        image={blog_details}
                        alt="Foto-fake"
                    />
                    <Card className="blog-card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={blogger}
                                alt="Foto-fake"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="blog-card-text"
                                >
                                    Somalia D. Silva
                                </Typography>
                                <Typography>CO-Founder</Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Amet consecte adipiscing elitse doeiusmod
                                    tempor incididunt labre et dolore magna
                                    aliqua lacus
                                </Typography>
                            </CardContent>
                            <div className="blog-icons">
                                <a href="foo">
                                    <FacebookIcon></FacebookIcon>
                                </a>
                                <a href="foo">
                                    <TwitterIcon></TwitterIcon>
                                </a>
                                <a href="foo">
                                    <YouTubeIcon></YouTubeIcon>
                                </a>
                                <a href="foo">
                                    <InstagramIcon></InstagramIcon>
                                </a>
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia cones sequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui do lorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem.
                </p>
                <div className="blog-text">
                    Ultimate Digital Clean-Up Checklist Are You Prepared
                </div>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam
                    estqui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam.Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia cones
                    sequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui do lorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia cones sequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui do lorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia cones sequuntur
                    magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui do lorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                </p>
                <Reviews />
            </Container>
        </>
    )
}

export default Blog
