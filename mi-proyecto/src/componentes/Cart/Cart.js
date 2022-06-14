import { useContext,useState,useEffect } from "react"
import CartContext from "../../Context/CartContext"
import '../Cart/Cart.css'
import { Link } from "react-router-dom"
import {addDoc, collection, getDocs,query,where,documentId,writeBatch} from 'firebase/firestore'
import {basedatos} from '../../../src/services/firebase/index'

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
    
    const crearOrden=()=> {
        console.log('se creo orden')
        const ordenObjeto = {
            comprador:{
                nombre: '',
                email : '',
                telefono: ''
            }, 
              producto : cart,
              total : totalApagar  
        }
        console.log(ordenObjeto)
        // const collectionRef = collection(basedatos,'ordenes')
        // addDoc(collectionRef, ordenObjeto).then(({id})=>{
        //     console.log(`se creo la orden con el id ${id}`)
        // })

        const ids= cart.map(prod => prod.id)

        console.log(ids)

        const batch = writeBatch(basedatos)
        const noHayStock = []

        const collectionRef = collection(basedatos,'productos')

        getDocs(query(collectionRef,where(documentId(), 'in',ids)))
        .then(respuesta => {
                respuesta.docs.forEach(doc => {
                const dataDoc = doc.data()
                const productosCantidad = cart.find(prod => prod.id === doc.id)?.inicial

                if(dataDoc.stock >=  productosCantidad){
                    batch.update(doc.ref, {stock: dataDoc.stock - productosCantidad})
                }else{
                    noHayStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(noHayStock.length === 0 ){
                const collectionRef = collection(basedatos, 'ordenes')
                return addDoc(collectionRef,ordenObjeto)
            }
            else 
            {
                return Promise.reject({type: 'no_hay_stock' , productos: noHayStock})
            }
        }).then(({ id })=>{
            console.log(`el id de la orden es ${id}`)
            batch.commit()
         }).catch(error => {
            console.log(`no hay stock disponible ${error}`)
         })

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
                     <button onClick={crearOrden} className="btn-detalleCompra">Crear Orden</button>
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