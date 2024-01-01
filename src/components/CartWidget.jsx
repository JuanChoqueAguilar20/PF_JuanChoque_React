import { Link } from "react-router-dom"
import cart from "../assets/cart.png"

export const CartWidget= () => {
    return (
    <Link to = "/cart">
    <img src={cart} alt="imagen de carrito" width="55" /> 
    <span>5</span>
    </Link> 
    )
}