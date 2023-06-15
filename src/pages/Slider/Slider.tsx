import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import './Slider.scss'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import SliderList from './SliderList'

type Props = {}

const Slider = (props: Props) => {
    return (
        <>
            <Container>
                <Typography className="slider-header">
                    Best Foods For Family
                </Typography>
                <Typography className="slider-header-text">
                    Best Foods For Family
                </Typography>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderList />
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/broccoli.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Organic Broccoli
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 18.0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/strawberry.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Fresh Carrots
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 25.0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/croissant.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Ripe Strawberries
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 49.58
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/orange.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Organic orange
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 55.0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/garnet.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Fresh Organic
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 83.5
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/strawberry.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Fresh Carrots
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 25.0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        {' '}
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/broccoli.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Organic Broccoli
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 18.0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/garnet.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Fresh Organic
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 83.5
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <SliderList />
                        <Card className="swiper-card">
                            <CardActionArea>
                                <div className="swiper-icons">
                                    <FavoriteBorderIcon
                                        fontSize="medium"
                                        className="swiper-like"
                                    ></FavoriteBorderIcon>
                                    <VisibilityIcon
                                        fontSize="medium"
                                        className=" swiper-like swiper-visibility"
                                    ></VisibilityIcon>
                                    <Button
                                        className="swiper-btn"
                                        variant="contained"
                                    >
                                        Add to cart +
                                    </Button>
                                </div>
                                <CardMedia
                                    className="swiper-img"
                                    component="img"
                                    image="./images/orange.png"
                                    alt="fruit"
                                />
                                <Typography component="legend"></Typography>
                                <Rating
                                    name="customized-10"
                                    defaultValue={2}
                                    max={5}
                                />
                                <CardContent>
                                    <Typography
                                        className="swiper-text"
                                        gutterBottom
                                        component="div"
                                    >
                                        Organic orange
                                    </Typography>
                                    <Typography
                                        className="swiper-text"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ 55.0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide> */}
                </Swiper>
            </Container>
        </>
    )
}
export default Slider
