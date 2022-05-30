import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio,img}) => {
    return(
        <div class="tarjeta">
        <div class="tarjeta">
            <img className='imagenProducto' src={img}></img>
            <h2>{nombre}</h2>
            <strong>${precio}</strong>
            <div className='contenedor-item'>
            <Link className='boton-detalle' to={`/detalle/${id}`}>VER DETALLE</Link>
            </div>
            <div className='contenedor-item'>
            <button className='boton-detalle'>SUMAR AL CARRITO</button>
            </div>
        </div>
        </div>
    )
}

export default Item