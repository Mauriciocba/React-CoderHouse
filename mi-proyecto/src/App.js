import './App.css';
import NavBar from './componentes/NavBar';
import Contenido from './componentes/Contenido';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <Contenido 
        titulo= 'CoderHouse'
        subtitulo='Componentes I'
        parrafo= 'Esta es una clase de componentes'/>
      </header>
    </div>
  );
}

export default App;
