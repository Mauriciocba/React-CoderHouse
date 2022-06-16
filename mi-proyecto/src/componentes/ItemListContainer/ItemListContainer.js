import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { productosDeBD } from '../../services/firebase/api'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [ cargando , setCargando] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
        setCargando(true)

        productosDeBD(categoriaId).then(resp =>{
            setProductos(resp)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setCargando(false)
        })
    },[categoriaId])

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
            {
                productos.length > 0
                ? <ItemList productos={productos}/>
                : <h2>No hay productos</h2>
            }
        </div>
    )
}


export default ItemListContainer