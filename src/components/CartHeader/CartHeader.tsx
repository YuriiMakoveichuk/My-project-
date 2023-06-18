type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const CartHeader = ({ cartData }: Props) => {
    return (
        <div className="card">
            <div>{cartData.totalCount}</div>
            <div>$ {cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
