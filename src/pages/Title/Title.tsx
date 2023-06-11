import { Button, Container, Typography } from '@mui/material'
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp'
import './Title.scss'
import fruits1 from 'assets/fruits1.png'
import organic1 from 'assets/organic1.png'

type Props = {}

const Title = (props: Props) => {
    return (
        <>
            <Container>
                <div className="title-menu">
                    <div>
                        <Typography className="title-menu-header">
                            Welcome to Munfirm
                        </Typography>
                        <Typography className="title-menu-organic">
                            Organic Foods & Vegetables
                        </Typography>
                        <Typography className="title-menu-years">
                            25 Years of experience in agriculture farming
                        </Typography>
                        <div className="title-btn">
                            <Button className="title-menu-btm btn-shop">
                                Shop Now
                                <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                            </Button>
                            <Button className="title-menu-btm btn-more">
                                Learn More
                                <KeyboardDoubleArrowRightSharpIcon></KeyboardDoubleArrowRightSharpIcon>
                            </Button>
                        </div>
                    </div>
                    <div className="title-fruits">
                        <Typography className="title-fruits-organic">
                            <img src={organic1} alt="Fake-shop logo" />
                        </Typography>
                        <Typography className="title-fruits-img">
                            <img src={fruits1} alt="Fake-shop logo" />
                        </Typography>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Title
