import React from "react";

import "./addTask.css";
import "./addButton.js";

const addTask = () => {
    return(
        <div className="inputContainer">
            <input className="inputPrincipal" type="text" />;
            <buttonEnviar />
        </div>
    );
};

export default addTask;