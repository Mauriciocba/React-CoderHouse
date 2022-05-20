import {useState} from 'react';
function ItemContador({stock}) {
   const [inicial, setInicial] = useState(1)
    
    const decrementa =()=>{
         if(inicial > 0){
            setInicial(inicial - 1)
        }      
    }

    const incrementa =()=>{
        if(inicial < stock){
            setInicial(inicial + 1)
        } 
    }

    return(
        <div>
            <strong>Stock: {stock - inicial} </strong>
            <button  onClick={decrementa}> - </button>
            <strong>  {inicial} </strong>
            <button onClick={incrementa}> + </button>
        </div>
    )
    
}

export default ItemContador;