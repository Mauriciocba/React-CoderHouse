import '../estilos-css/NavBar.css'

function NavBar() {
    return(
        <div className="barraPrincipal">
         <ul>
           <li>Inicio</li>
           <li>Productos</li>
           <li>Contactos</li>
         </ul>
         <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png' className="logo" alt="logo" />
        </div>
        
    )
}

export default NavBar