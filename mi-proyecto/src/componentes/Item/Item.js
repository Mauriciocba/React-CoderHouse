import '../Item/Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio,img}) => {
    return(
        <Link to={`/detalle/${id}`}>
        <div className='contenedor-card'>
        <div className="tarjeta" >
        <div className="tarjeta">
            <img className='imagenProducto' src={img}></img>
            <h2 className='nombre-producto'>{nombre}</h2>
            <strong>${precio}</strong>
        </div>
        </div>
        </div>
        </Link>
    )
}

export default Item