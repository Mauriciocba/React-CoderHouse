import '../ItemListContainer/ItemListContainer.css'
import { listaProductos,productosPorCategoria } from "../../Productos"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from 'firebase/firestore'
import { basedatos } from '../../services/firebase'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [ cargando , setCargando] = useState(true)
    const {categoriaId} = useParams()

    useEffect(() => {
        setCargando(true)

        const collectionRef = categoriaId
        ? query(collection(basedatos,'productos'), where('categoria', '==', categoriaId ))
        :collection(basedatos,'productos')

        getDocs(collectionRef).then(respuesta =>{
            const productos = respuesta.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProductos(productos)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setCargando(false)
        })
        
    },[categoriaId])
    //   if (!categoriaId) {
    //       listaProductos().then(respuesta => {
    //       setProductos(respuesta)
    //       }).catch(error =>{
    //           console.log(error)
    //       }).finally(( )=>{
    //           setCargando(false)
    //       })
    // }else
    // {
    //     productosPorCategoria(categoriaId).then(respuesta =>{
    //         setProductos(respuesta)
    //     }).catch(error =>{
    //         console.log(error)
    //     }).finally(( )=>{
    //         setCargando(false)
    //     })
    // }


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