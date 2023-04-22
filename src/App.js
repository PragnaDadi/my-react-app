import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Enter your Login info below</h1>
      <textarea>Username</textarea>
      <br></br>
      <button>Login</button>

        <img src={logo} className="App-logo" alt="logo" />
        <p> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
