import React, { useState } from "react";

import "./addTask.css";
import Button from "./addButton.js";

const AddTask = ({ HandleTaskAddition }) => {
    const [ inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const HandleAddTaskClick = () => {
        HandleTaskAddition(inputData);
    };

    return(
        <div className="inputContainer">
            <input onChange={handleInputChange} value={inputData} className="inputPrincipal" type="text" />
            <div className="container-button">
                <Button onClick={HandleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default AddTask;