import { useState, useEffect } from "react";
import { productoId } from "../../Productos";
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const [producto , setProducto] = useState()

    useEffect(()=>{
        productoId('4').then(respuesta =>{
            setProducto(respuesta)
        })
    },[])


    return(
        <div>
            <ItemDetail titulo={producto?.nombre} />
        </div>
    )
}

export default ItemDetailConteiner