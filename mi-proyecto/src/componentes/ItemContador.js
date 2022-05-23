import {useState} from 'react';
function ItemContador({stock, numeroInicia, onAdd}) {
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
    }

    return(
        <div>
            <strong>Stock: {stock - inicial} </strong>
            <button  onClick={decrementa}> - </button>
            <strong>  {inicial} </strong>
            <button onClick={incrementa}> + </button>
            <div>
            <button onClick={AgregarAlCarrito}>SUMAR AL CARRITO</button>
            </div>
        </div>
    )
    
}

export default ItemContador;