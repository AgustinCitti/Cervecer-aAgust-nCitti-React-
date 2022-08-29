import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.js';
function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Cerveza Castelo</h1>
        <ItemListContainer CervezasNombre='Kolsch' CervezaDescripcion='Es una cerveza clara, su tonalidad es amarilla brillante y tiene un gusto prominente, pero no extremo de lúpulo. '/>
      </header>
      
    </div>
  );
}

export default App;
