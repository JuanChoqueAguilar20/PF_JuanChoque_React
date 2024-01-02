import {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc} from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import { CartContext } from "../contexts/CartContext";
import { ItemCounter } from "./ItemCounter";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    const { onAdd } = useContext(CartContext)

    useEffect (() => {
        const db = getFirestore();

        const refDoc = doc(db, "items", id);
    
        getDoc(refDoc).then((snapshot) => {
          setItem({ id: snapshot.id, ...snapshot.data() });
        })
        .finally(() => setLoading(false));
    }, [id]);

    const add = ( quantity ) =>{
    onAdd(item, quantity)
    }

    if(loading){
        return <>loading...</>
    }

    return ( 
    <Container className="mt-4">
        <h1>{item.tittle}</h1>
        <img src={item.imageId} width={400}/>
        <p>{item.description}</p>
         <p> Stock: {item.stock}</p>

        <ItemCounter initial={1} stock={item.stock} onAdd={add}/>
       
    </Container>
 )
}