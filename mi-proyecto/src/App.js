import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import PageNotFound from './componentes/PageNotFound/PageNotFound';
import About from './componentes/About/About';
import Cart from './componentes/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import Formulario from './componentes/Formulario/Formulario';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
       <CartContextProvider>
       <BrowserRouter>    
       <NavBar />
       <Routes>
       <Route  path='/' element={<ItemListContainer />}/>
       <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
       <Route path='/nosotros' element={<About />} />
       <Route path='/formulario' element={<Formulario />} />
       <Route path='/detalle/:id' element={<ItemDetailConteiner />} />
       <Route path='/cart' element={<Cart />} />
       <Route path='*' element={<PageNotFound />} />
       </Routes>
       </BrowserRouter>
       </CartContextProvider> 
    </div>
  );
}

export default App;
