import {useState} from 'react';
import '../estilos-css/ContadorProductos.css'
import ItemContador from './ItemContador';
function ContadorProductos({img,titulo,stock,precio}) {
    
    const [count, setCount] = useState(0)
    
    const decrementa =()=>{
         setCount(count - 1)    
    }

    const incrementa =()=>{
        setCount(count + 1) 
    }

    const onAdd= (inicial) =>{
        console.log(`Se agrego al carrito ${inicial}`)
    }


    return(
        <div className='contenedor1'>
          <div className='card'>
            <img className='imagen-producto' src={img} /> 
            <h4>{titulo}</h4>
            <p>Precio: {precio}</p>
            {/* <strong>Stock: {stock - count}</strong>
            <div className='contenedor-boton'>
            <button className='botton1' onClick={decrementa}>-</button>
            <h5>{count}</h5>
            <button className='botton2' onClick={incrementa}>+</button> */}
            <ItemContador  
            stock={5} 
            numeroInicia={1}
            onAdd={onAdd}/>
            </div>
         </div>
        
    )
    
}

export default ContadorProductos;