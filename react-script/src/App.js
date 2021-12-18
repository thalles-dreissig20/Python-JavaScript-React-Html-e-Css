/* eslint-disable react/jsx-no-undef */
import './App.css';

import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/overviwer" exact component={home} />
      </Switch>
    </Router>

  );
}

export default App;
