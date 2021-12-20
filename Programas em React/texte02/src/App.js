import './App.css';

import MenuPrincipal from './components/menuPrincipal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MenuPrincipal />
    </Router>
  );
}

export default App;
