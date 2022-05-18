import '../estilos-css/NavBar.css'
import CarritoComponente from './CarritoComponente'
import CarritoImg from './CarritoImg'

function NavBar() {
    return(
        <div className="barraPrincipal">
         <ul>
           <li>Inicio</li>
           <li>Productos</li>
           <li>Contactos</li>
         </ul>
         <CarritoComponente />     
        </div>
        
    )
}

export default NavBar