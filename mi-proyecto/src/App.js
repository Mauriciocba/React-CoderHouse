import './App.css';
import NavBar from './componentes/NavBar';
import Contenido from './componentes/Contenido';
import ContadorProductos from './componentes/ContadorProductos';
import CarritoComponente from './componentes/CarritoComponente';
import ItemContador from './componentes/ItemContador';



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
      precio={60000}
       img="./imagenes/celular1.jpg"/>
      <ContadorProductos
      titulo="Samsung 10"
      precio={50000}
       img="./imagenes/celular2.jpg"/> 
    </div>
  );
}

export default App;
