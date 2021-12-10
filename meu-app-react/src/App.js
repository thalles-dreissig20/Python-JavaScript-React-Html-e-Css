import React, { useState } from "react";


import Tasks from "./componentes/Tasks.js";
import "./componentes/addTask.js";
import "./componentes/addButton.js";
import "./App.css";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "programação",
      completed: true,
    },
    {
      id: "2",
      title: "Televisão",
      completed: false,
    },
    {
      id: "2",
      title: "Computador",
      completed: false,
    },
    {
      id: "2",
      title: "Design",
      completed: false,
    },
  ]);

  return (
    <>
      <div className="container">
        <addTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;