import { useContext,useState,useEffect } from "react"
import CartContext from "../../Context/CartContext"
import '../Cart/Cart.css'
import { Link } from "react-router-dom"



const Cart = ()=> {
    
    const [totalApagar, setTotal] = useState(0)
    const { cart, eliminarProducto, borrarTodoCarrito,contadorProductosCarrito} = useContext(CartContext)
    const contadorCarrito = contadorProductosCarrito()
    
    useEffect(() => {
        calcularTotal2()
    }, [cart])

    
    const calcularTotal2 = () => {
        let total = 0 
        cart.forEach(prod => {
            total += prod.precio * prod.inicial
        })
        setTotal(total)

    } 
    
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
                                 <p>Precio ${prod.precio}</p>
                                 <p>Cantidad {prod.inicial}</p>
                                 <p>Subtotal ${prod.precio * prod.inicial}</p>
                                <div>
                                <button className="btn" onClick={()=> eliminarProducto(prod.id)}>Eliminar Producto</button>
                                </div>
                            </div>
                        </div>
                     </div>
                    )})
                }  

                {contadorCarrito > 0 ?  
                <div className="contenedor-btn-borrarTodos">
                    <div>
                     <h1 className="total">Total: ${totalApagar}</h1>
                     <Link to='/' className="btn-detalleCompra">Terminar Compra</Link>
                    </div>
                    <button className="btn-borrarTodos" onClick={()=> borrarTodoCarrito()}>Eliminar Todos los productos</button>
                </div>
                : <div className=".contenedor-noHayProductos">
                    <h1 className="titulo-NohayProductos">No hay productos ... </h1>
                     <Link className="btn-acomprar" to='/'>a comprar!</Link> 
                 </div>}
                    

                </div>
                    
            </div> 
    )}
     

export default Cart