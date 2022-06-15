import '../ItemCount/ItemCount.css'
import {useState} from 'react';
import swal from 'sweetalert'


function ItemCount({stock, numeroInicia = 1 , onAdd}) {
   const [inicial, setInicial] = useState(numeroInicia)
    
    const decrementa =()=>{
         if(inicial > 1){
            setInicial(inicial - 1)
        }      
    }

    const incrementa =()=>{
        if(inicial < stock){
            setInicial(inicial + 1)
        } 
    }

    const AgregarAlCarrito = ()=>{
        onAdd(inicial)
        if(stock <= 0){
            swal("Disculpe", `No hay stock disponible`, "error");
        }
    }

    return(
        <div>
            <strong>Disponibles {stock} </strong>
            <div>
            <button className='boton-itemCount' onClick={decrementa}> - </button>
            <strong>  {inicial} </strong>
            <button className='boton-itemCount'  onClick={incrementa}> + </button>
            <div>
            <button className='boton-itemCount' onClick={AgregarAlCarrito}>AGREGAR AL CARRITO</button>
            </div>
            </div>
        </div>
    )
    
}

export default ItemCount;