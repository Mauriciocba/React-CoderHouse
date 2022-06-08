import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import '../Cart/Cart.css'

const Cart = ()=> {

    const { cart, eliminarProducto, borrarTodoCarrito } = useContext(CartContext)
    
    return(
            <div>
                <div>
                {cart.map(prod => { 
                     return(
                         <div key={prod.id} className="container-carrito">
                         <div className="card-detail-categoria">
                             <div className="card__header">
                                 <img id="imagen-card-carrito" src={prod.img} alt="card__image" className="card__image" width="600" />
                             </div>
                            <div className="card__body_carrito">
                               <span className="tag tag-blue">{prod.categoria}</span>
                                 <h4>{prod.nombre}</h4>
                                 <stron>Precio ${prod.precio}</stron>
                                 <p>Subtotal ${prod.precio * prod.inicial}</p>
                                 <p>Cantidad {prod.inicial}</p>
                                <div>
                                <button className="btn" onClick={()=> eliminarProducto(prod.id)}>Eliminar Producto</button>
                                </div>
                            </div>
                        </div>
                     </div>
                    )})
                }  
              
                <div className="contenedor-btn-borrarTodos">
                    <button className="btn-borrarTodos" onClick={()=> borrarTodoCarrito()}>Eliminar Todos los productos</button>
                </div>

                </div>
            </div> 
    )}
     

export default Cart