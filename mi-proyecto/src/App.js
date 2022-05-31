import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Contenido from './componentes/Contenido';
import ContadorProductos from './componentes/ContadorProductos';
import CarritoComponente from './componentes/CarritoComponente/CarritoComponente';
import ItemContador from './componentes/ItemContador';
import ItemList from './componentes/ItemList/ItemList';
import {useState, useEffect} from 'react'
import {listaProductos,productoId} from '../src/Productos'
import ItemDetail from '../src/componentes/ItemDetail/ItemDetail'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import PageNotFound from './componentes/PageNotFound/PageNotFound';
import About from './componentes/About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
       <BrowserRouter>
       <NavBar />
       <Routes>
       <Route  path='/' element={<ItemListContainer />}/>
       <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
       <Route path='/nosotros' element={<About />} />
       <Route path='/detalle/:id' element={<ItemDetailConteiner />} />
       <Route path='*' element={<PageNotFound />} />
       </Routes>
       </BrowserRouter>

      
     
    </div>
  );
}

export default App;
