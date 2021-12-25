import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Routes>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/pagina-de-registro">
                <Cadastro />
            </Route>
        </Routes>
    );  
}
