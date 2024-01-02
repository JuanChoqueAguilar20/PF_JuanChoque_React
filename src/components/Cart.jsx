import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { CartContext } from '../contexts/CartContext';

const clearBuyer = {name:"", phone:"", email:""}

export const Cart = () => {

const [buyer, setBuyer] = useState(clearBuyer)
const {clear,items, removeItem } = useContext(CartContext)

const total = items.reduce((acumulador, actual) =>
    acumulador + actual.price * actual.quantity
    ,0)

const handleSendOrder = () => {
    const order = {buyer, items, total}

    const db = getFirestore ()

    const orderCollection = collection(db, "orders")
            
    addDoc(orderCollection, order).then(({id}) => {
        if(id){
            alert("Su orden: " + id + " ha sido completada :D")
            }
    }).finally (()=> {
        setBuyer(clearBuyer); 
        clear()
    } )
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

if(!items.length === 0) return <div>Por el momento no compró nada</div> 
    
return (
    <Container>
            <button onClick={clear}>Vaciar Carrito</button>
            <mark>{total}</mark>
            <div className="d-flex">

            {items.map((item) => (
                <div key= {item.id}>
                    <h1>{item.tittle}</h1>
                    <h2>Precio: {item.price}</h2>
                    <h3>Cantidad: {item.quantity}</h3>
                    <p>{item.description}</p>
                    <img src={item.imageId || `imagen-predeterminada`} width={300} />
                    <div onClick={()=> removeItem(item.id)}>x</div>


                </div>
            
            ))}
            </div>
            <form>
                <div className='input-group'>
                    <label>Nombre</label> 
                    <input type="text" value={buyer.name} onChange={handleChange} required name="name"/>
                </div>
                <div className='input-group'>
                    <label>Telefono</label> 
                    <input type="text" value={buyer.phone} onChange={handleChange} required name="phone"/>
                </div>
                <div className='input-group'>
                    <label>Email</label> 
                    <input type="text" value={buyer.email} onChange={handleChange} required name="email"/>
                </div>
            </form>
            <button type="button" onClick={handleSendOrder}>Comprar</button>


    </Container>
    )
}