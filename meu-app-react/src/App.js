import React, { useState } from "react"


import Tasks from "./componentes/Tasks.js";
import "./App.css";

const App = () => {

 // let mensagem = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "programação",
      componet: true,
    },
    {
      id: "2",
      title: "Televisão",
      componet: false,
    },
    {
      id: "2",
      title: "Televisão",
      componet: false,
    },
    {
      id: "2",
      title: "Televisão",
      componet: false,
    },
  ]);

  return(
    <>
        <div className="container">
          <Tasks tasks={tasks} />
        </div>
    </>
  )
}

export default App;