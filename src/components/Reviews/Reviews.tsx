import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import { useState } from 'react'

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
        <div>
            <Typography>Reviews</Typography>

            {review.map(({ name, text }, i) => (
                <Card key={i}>
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <Typography>Please leave a review</Typography>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextareaAutosize
                        minRows={10}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Reviews
