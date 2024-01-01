import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { getFirestore, collection, addDoc} from "firebase/firestore";

import { CartContext } from '../contexts/CartContext';

const clearBuyer = {name:"", phone:"", email:""}

export const Cart = () => {
    const [buyer, setBuyer] = useState(clearBuyer)
    const {clear,items } = useContext(CartContext)

    const total = items.reduce((acumulador, actual) =>{
       return acumulador + actual.price * 5
    },0)

    const handleSendOrder = () => {
        const order = {
            buyer,
            items,
            total,
        }
        }

        const handleChange = (ev) => {
            const { name, value } = ev.target

            setBuyer((prev) =>{
                return {
                    ...prev,
                    [name]: value,
                }
            })
        }

    return (
        <Container>
            <button onClick={clear}>Vaciar Carrito</button>
            <div className="d-flex">

            {items.map((item) => (
                <div key= {item.id}>
                    <h1>{item.tittle}</h1>
                    <h2>{item.price}</h2>
                    <p>{item.description}</p>
                    <img src={item.pictureUrl} width={300} />

                </div>
            
            ))}
            </div>
            <form>
                <div className='input-group'>
                    <label>Nombre</label> 
                    <input type="text" value={buyer.name} onChange={handleChange} name="name"/>
                </div>
                <div className='input-group'>
                    <label>Telefono</label> 
                    <input type="text" value={buyer.phone} onChange={handleChange} name="phone"/>
                </div>
                <div className='input-group'>
                    <label>Email</label> 
                    <input type="text" value={buyer.email} onChange={handleChange} name="email"/>
                </div>
            </form>
            <button onClick={handleSendOrder}>Comprar</button>


        </Container>

    )

}