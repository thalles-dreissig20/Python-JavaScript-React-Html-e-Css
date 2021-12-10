import React from "react";

import "./addButton.css";

const buttonEnviar = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="button">
        {children}</button>
    );
};

 
export default buttonEnviar;