import {useState} from 'react';
import '../estilos-css/ContadorProductos.css'
function ContadorProductos(props) {
    const [count, setCount] = useState(0)

    const decrementa =()=>{
       setCount(count-1)
    }

    const incrementa =()=>{
        setCount(count+1) 
    }

    return(
        <div className='contenedor1'>
          <div className='card'>
            <img className='imagen-producto' src={props.img} /> 
            <h4>{props.titulo}</h4>
            <div className='contenedor-boton'>
            <button className='botton1' onClick={decrementa}>-</button>
            <h5>{count}</h5>
            <button className='botton2' onClick={incrementa}>+</button>
            <button>Agregar al Carrito</button>
            </div>
         </div>
        </div>
    )
    
}

export default ContadorProductos;