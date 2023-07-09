import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import feedback from 'assets/feedback.jpg'
import feedback_right from 'assets/feedback_right.png'
import './Reviews.scss'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Yulia',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tenetur cupiditate delectus amet perferendis quod sapiente. Ea incidunt fugiat perspiciatis quasi corporis, amet at cumque placeat magni numquam omnis aut.',
        },
        {
            name: 'Yurii',
            text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tenetur cupiditate delectus amet perferendis quod sapiente. Ea incidunt fugiat perspiciatis quasi corporis, amet at cumque placeat magni numquam omnis aut.',
        },
    ]

    const [review, setReview] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are reguired')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })

            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <div className="reviews">
            <div className="reviews-top">
                <div className=" reviews-header">
                    <Typography className="reviews-menu-header">
                        Customer Reviews
                    </Typography>
                    <Typography className="reviews-menu-organic">
                        Valuable Customer’s Feedback (Reviews)
                    </Typography>
                    <form onSubmit={onSend}>
                        <Typography className="reviews-form">
                            Please leave a review
                        </Typography>
                        <div>
                            <TextField
                                size="small"
                                placeholder="Your name"
                                value={newReview.name}
                                onChange={handleName}
                                color="success"
                            />
                        </div>
                        <div>
                            <TextareaAutosize
                                className="reviews-text"
                                minRows={6}
                                placeholder="Your text"
                                value={newReview.text}
                                onChange={handleText}
                            />
                        </div>
                        <Button
                            className="reviews-btn"
                            variant="outlined"
                            type="submit"
                        >
                            Send
                        </Button>
                    </form>
                </div>
                <div className="reviews-img">
                    <div className="reviews-header-img">
                        <img src={feedback} alt="Fake foto" />
                    </div>
                    <div className="reviews-header-img-right">
                        <img src={feedback_right} alt="Fake foto" />
                    </div>
                </div>
            </div>

            {review.map(({ name, text }, i) => (
                <Card key={i} sx={{ margin: '20px 0' }}>
                    <CardContent>
                        <div className="reviews-name">{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Reviews
