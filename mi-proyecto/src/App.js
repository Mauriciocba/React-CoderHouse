import './App.css';
import NavBar from './componentes/NavBar';
import Contenido from './componentes/Contenido';
import ContadorProductos from './componentes/ContadorProductos';
import CarritoComponente from './componentes/CarritoComponente';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <Contenido 
        titulo= 'CoderHouse'
        subtitulo='E-Commerse' />
      </header>
      <ContadorProductos
      titulo="Samsung 11"
       img="./imagenes/celular1.jpg"
      />
      <ContadorProductos
      titulo="Samsung 10"
       img="./imagenes/celular2.jpg"
      />
    </div>
  );
}

export default App;
