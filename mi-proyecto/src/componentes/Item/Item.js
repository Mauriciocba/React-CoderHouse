import '../Item/Item.css'

const Item = ({id, nombre, precio,img}) => {
    return(
        <div class="tarjeta">
        <div class="tarjeta">
            <img className='imagenProducto' src={img}></img>
            <h2>{nombre}</h2>
            <strong>${precio}</strong>
            <div className='contenedor-item'>
            <button className='boton-item'>SUMAR AL CARRITO</button>
            </div>
        </div>
        </div>
    )
}

export default Item