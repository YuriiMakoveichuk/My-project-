import Button from '@mui/material/Button'
import { TextField, Typography } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useState } from 'react'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import axios from 'axios'

type Props = {}

type Checkin = {
    name: string
    email: string
}

const Register = (props: Props) => {
    const [register, setRegister] = useState<string>('header-register')

    const changeRegister = () => {
        setRegister((prevState) =>
            prevState === 'header-register'
                ? 'header-register-open'
                : 'header-register'
        )
    }

    const [chekinMan, setCheckinMan] = useState<Checkin>({
        name: '',
        email: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckinMan((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckinMan((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    // const onSan = (e: React.FormEvent<HTMLElement>) => {
    //     e.preventDefault()

    //     axios
    //         .post(
    //             'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
    //             {
    //                 name: chekinMan.name,
    //                 email: chekinMan.email,
    //             }
    //         )
    //         .then((res) => res.data)
    //         .then(({ name, email }) => {
    //             setCheckinMan({ name, email })
    //         })
    // }

    return (
        <>
            <ul className="register">
                <li>
                    <Button
                        className="register-btn"
                        onClick={() => changeRegister()}
                    >
                        <AccountCircleSharpIcon />
                    </Button>
                </li>
                <form className={register}>
                    <div className="header-register-close">
                        <Button
                            className="register-btn"
                            onClick={() => changeRegister()}
                        >
                            <HighlightOffIcon />
                        </Button>
                    </div>
                    <Typography className="header-register-text">
                        Register on the site
                    </Typography>
                    <div className="header-register-input">
                        <TextField
                            size="small"
                            placeholder="Your name"
                            value={chekinMan.name}
                            onChange={handleName}
                        ></TextField>
                    </div>
                    <div className="header-register-input">
                        <TextField
                            size="small"
                            placeholder="Your email"
                            value={chekinMan.email}
                            onChange={handleEmail}
                        ></TextField>
                    </div>
                    <Button
                        className="reviews-btn"
                        variant="outlined"
                        type="submit"
                    >
                        Send
                    </Button>
                </form>
            </ul>
        </>
    )
}

export default Register
