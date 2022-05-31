import '../ItemDetailConteiner/ItemDetailConteiner.css'
import { useState, useEffect } from "react";
import { productoId } from "../../Productos";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
    const [producto , setProducto] = useState()
    const [ cargando , setCargando] = useState(true)

    const {id} = useParams()
    
    useEffect(()=>{
        productoId(id).then(respuesta =>{
            setProducto(respuesta)
        }).catch(error =>{
            console.log(error)
        }).finally(( )=>{
            setCargando(false)
        })
  },[])

    if (cargando) {
        return (
            <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            </div>)
    }

    return(
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailConteiner