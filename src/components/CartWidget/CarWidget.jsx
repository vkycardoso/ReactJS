
import logo from "../../../public/carrito.png"


const CartWidget = () => {
    

    return (
        <div>
            <img className="carrito" src={logo} />
            <span>0</span>

        </div>
    )
}

export default CartWidget