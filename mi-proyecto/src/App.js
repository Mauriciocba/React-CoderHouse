import './App.css';
import NavBar from './componentes/NavBar/NavBar';
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
       <Route path='/cart' element={<h1>Cart</h1>} />
       <Route path='*' element={<PageNotFound />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
