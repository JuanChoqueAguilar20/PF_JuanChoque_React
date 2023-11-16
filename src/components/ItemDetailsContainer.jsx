import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";
 
 export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)

    const {id} = useParams()

    console.log(typeof id)

    useEffect (() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            },2000);
        });
    
    promise.then((response) => {
        const filteres = response.find((item) => item.id == id)
        setItem(filteres);
    })
    }, [id]);

    if(!item){
        return <>loading...</>
    }

    return <div>
        <h1>{item.tittle}</h1>
        <img src={item.pictureUrl} width={400}/>
        <p>{item.description}</p>
        </div>
}