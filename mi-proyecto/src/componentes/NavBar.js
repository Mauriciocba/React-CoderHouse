import '../estilos-css/NavBar.css'
import CarritoComponente from './CarritoComponente'
import CarritoImg from './CarritoImg'
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
    return(
       
        <div className="barraPrincipal">
         <Link className='nav-boton' to='/'>INICIO</Link>
         <NavLink  className='nav-boton' to='/categoria/celulares'>CELULARES</NavLink>
         <NavLink className='nav-boton' to='/categoria/computacion'>COMPUTACION</NavLink>
         <Link className='nav-boton' to='nosotros'>ACERCA DE NOSOTROS</Link>
         <CarritoComponente />     
        </div>
        
    )
}

export default NavBar



