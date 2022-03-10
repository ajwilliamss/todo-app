import { useContext, useEffect } from "react";
import { TaskContext } from "./contexts/TaskContext";
import { FilterContext } from "./contexts/FilterContext";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  const { tasks } = useContext(TaskContext);
  const { filterTask, filteredTasks, setFilteredTasks } =
    useContext(FilterContext);

  /* Assign result of filter method to variable 
  and pass that variable to setState function. 
  This ensures the state is not accidentally mutated */
  const handleFilter = () => {
    if (filterTask === "finished") {
      const finishedTasks = tasks.filter((task) => task.finished === true);
      setFilteredTasks(finishedTasks);
    } else if (filterTask === "unfinished") {
      const unfinishedTasks = tasks.filter((task) => task.finished === false);
      setFilteredTasks(unfinishedTasks);
    } else {
      const allTasks = tasks;
      setFilteredTasks(allTasks);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [tasks, filterTask]);

  return (
    <>
      <header>
        <h1>Todo list:</h1>
      </header>
      <Form />
      <List filteredTasks={filteredTasks} />
    </>
  );
}

export default App;
