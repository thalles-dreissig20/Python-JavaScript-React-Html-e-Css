import { BrowserRouter } from 'react-router-dom';

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
