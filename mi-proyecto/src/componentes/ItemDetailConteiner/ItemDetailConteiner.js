import { useState, useEffect } from "react";
import { productoId } from "../../Productos";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
    const [producto , setProducto] = useState()

    const {id} = useParams()
    
    useEffect(()=>{
        productoId(id).then(respuesta =>{
            setProducto(respuesta)
        })
    },[])


    return(
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailConteiner