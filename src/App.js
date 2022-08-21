import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Cerveza Castelo</h1>
      </header>
    </div>
  );
}

export default App;
