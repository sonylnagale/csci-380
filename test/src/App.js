import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
          learn react now
          Learn React
          <HelloWorld name='Samy'/>
          
        
      </header>
    </div>
  );
}

export default App;
