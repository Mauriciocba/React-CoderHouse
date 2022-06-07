import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react'
import '../CarritoComponente/CarritoImg.css'
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

function CarritoComponente() {

   const {contadorProductosCarrito} = useContext(CartContext)
   const contadorCarrito = contadorProductosCarrito()


    return(
        <Link to='/cart' className="contenido">
            <AiOutlineShoppingCart className="imagen-carrito" />
            <strong className="contador-carrito">{contadorCarrito}</strong> 
        </Link>
        
    )
}

export default CarritoComponente