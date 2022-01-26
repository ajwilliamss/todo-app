import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleFilter = () => {
    if (filter === "finished") {
      const finishedTasks = tasks.filter((task) => task.finished === true);
      setFilteredTasks(finishedTasks);
    } else if (filter === "unfinished") {
      const unfinishedTasks = tasks.filter((task) => task.finished === false);
      setFilteredTasks(unfinishedTasks);
    } else {
      const allTasks = tasks;
      setFilteredTasks(allTasks);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [tasks, filter]);

  return (
    <>
      <header>
        <h1>Todo list:</h1>
      </header>
      <Form
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
        setFilter={setFilter}
      />
      <List tasks={tasks} setTasks={setTasks} filteredTasks={filteredTasks} />
    </>
  );
}

export default App;
