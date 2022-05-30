import { listaProductos,productosPorCategoria } from "../../Productos"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
      if (!categoriaId) {
          listaProductos().then(respuesta => {
          setProductos(respuesta)
          })
    }else{
        productosPorCategoria(categoriaId).then(respuesta =>{
            setProductos(respuesta)
        })
    }

    },[])

    return(
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer