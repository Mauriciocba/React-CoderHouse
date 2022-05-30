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
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {

  // const [productos, setProductos] = useState([])

  // useEffect(() => {
  //   listaProductos().then(respuesta =>{
  //     setProductos(respuesta)
  //   })
  // },[])

  return (
    <div className="App">
      <header className="App-header">
      </header>
       <BrowserRouter>
       <NavBar />
       <Contenido 
        titulo= 'CoderHouse'
        subtitulo='E-Commerse' />
       <Routes>
       <Route  path='/' element={<ItemListContainer />}/>
       <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
       <Route path='/nosotros' element={<h5>Acerca de Nosotros</h5>} />
       <Route path='/detalle/:id' element={<ItemDetailConteiner />} />
       <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
       </Routes>
       </BrowserRouter>

      
     
    </div>
  );
}

export default App;
