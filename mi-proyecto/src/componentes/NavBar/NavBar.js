import '../NavBar/NavBar.css'
import CarritoComponente from '../CarritoComponente/CarritoComponente'
import {Link, NavLink} from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import Login from '../Login/Login'


function NavBar() {
    const {contadorProductosCarrito , inicioSessionGoogle} = useContext(CartContext)
    const contadorCarrito = contadorProductosCarrito()


    return(
        <div className="barraPrincipal">
         <Link className='nav-boton' to='/'>INICIO</Link>
         <NavLink  className='nav-boton' to='/categoria/celulares'>CELULARES</NavLink>
         <NavLink className='nav-boton' to='/categoria/computacion'>COMPUTACION</NavLink>
         <Link className='nav-boton' to='nosotros'>ACERCA DE NOSOTROS</Link>
         <Login />
         {contadorCarrito > 0  &&   <CarritoComponente />}      
        </div>
        
    )
}

export default NavBar



