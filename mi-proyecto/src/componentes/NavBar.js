import '../estilos-css/NavBar.css'
import CarritoComponente from './CarritoComponente'
import CarritoImg from './CarritoImg'
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <div className="barraPrincipal">
         <Link to='/'>INICIO</Link>
         <Link to='productos'>PRODUCTOS</Link>
         <Link to='nosotros'>ACERCA DE NOSOTROS</Link>
         <CarritoComponente />     
        </div>
        
    )
}

export default NavBar