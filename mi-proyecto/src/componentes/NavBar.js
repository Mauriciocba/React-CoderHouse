import '../estilos-css/NavBar.css'
import CarritoImg from './CarritoImg'

function NavBar() {
    return(
        <div className="barraPrincipal">
         <ul>
           <li>Inicio</li>
           <li>Productos</li>
           <li>Contactos</li>
         </ul>
         <CarritoImg /> 
        </div>
        
    )
}

export default NavBar