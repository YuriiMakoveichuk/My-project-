import { TextField } from '@mui/material'
import { Button } from '@mui/material'

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    minCount: number
}

const Quatity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount,
}: Props) => {
    return (
        <div className="shop-card-quantity">
            <Button
                variant="outlined"
                size="small"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField value={count} size="small" />
            <Button
                variant="outlined"
                size="small"
                onClick={() => onIncrementClick()}
                disabled={count >= 50}
            >
                +
            </Button>
        </div>
    )
}

export default Quatity
