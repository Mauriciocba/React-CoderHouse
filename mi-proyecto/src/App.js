import './App.css';
import NavBar from './componentes/NavBar';
import Contenido from './componentes/Contenido';
import ContadorProductos from './componentes/ContadorProductos';
import CarritoComponente from './componentes/CarritoComponente';
import ItemContador from './componentes/ItemContador';
import ItemList from './componentes/ItemList/ItemList';
import {useState, useEffect} from 'react'
import {listaProductos,productoId} from '../src/Productos'
import ItemDetail from '../src/componentes/ItemDetail/ItemDetail'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';

function App() {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    listaProductos().then(respuesta =>{
      setProductos(respuesta)
    })
  },[])

 

  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <Contenido 
        titulo= 'CoderHouse'
        subtitulo='E-Commerse' />
      </header>
      {/* <ContadorProductos
      titulo="Samsung 11"
      precio={60000}
       img="./imagenes/celular1.jpg"/>
      <ContadorProductos
      titulo="Samsung 10"
      precio={50000}
       img="./imagenes/celular2.jpg"/>  */}

       <ItemList productos={productos} />
       
       <ItemDetailConteiner />
     
    </div>
  );
}

export default App;
