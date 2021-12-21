import './App.css';

import MenuPrincipal from './components/menuPrincipal';
import BanerPrincipal from './components/banerPrincipal';
//import PaginaSobre from './components/PaginaSobre.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MenuPrincipal />
      <BanerPrincipal />   
    </Router>
  );
}

export default App;
