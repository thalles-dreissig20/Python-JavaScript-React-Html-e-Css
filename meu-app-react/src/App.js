import React, { useState } from "react";


import Tasks from "./componentes/Tasks.js";
import AddTask from "./componentes/addTask.js";
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
      id: "3",
      title: "Computador",
      completed: false,
    },
    {
      id: "4",
      title: "Design",
      completed: false,
    },
  ]);

  const HandleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,{
        title: taskTitle,
        id: "5",
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <AddTask HandleTaskAddition={HandleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;