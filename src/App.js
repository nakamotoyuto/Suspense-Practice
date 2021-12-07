import logo from './logo.svg';
import './App.css';
import { Router } from './Router';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router />
      <Link to="/">home</Link>
      <Link to="details">details</Link>
      <Link to="pokemon">pokemon</Link>
    </div>
  );
}

export default App;
