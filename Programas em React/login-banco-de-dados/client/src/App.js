import "./App.css";
import { BrowserRouter } from 'react-router-dom';

import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Routes from "./routes";

function App() {
  return(
    <BrowserRouter>
      <Login />
      <Routes />
    </BrowserRouter>
  );
};
export default App;
