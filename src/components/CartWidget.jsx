import { useContext } from 'react';
import { Link } from "react-router-dom"
import cart from "../assets/cart.png"
import { CartContext } from '../contexts/CartContext';

export const CartWidget= () => {
    const {items } = useContext(CartContext)

    const total = items.reduce(
        (acumulador, actual)=> acumulador + actual.quantity,0) 

    return (
    <Link to = "/cart">
    <img src={cart}  width="55" alt= "carrito de compras" /> 
    <span>{total}</span>
    </Link> 
    )
}