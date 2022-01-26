import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

const Form = ({ task, setTask, tasks, setTasks, setFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = [
      ...tasks,
      { id: uuidv4(), content: task, finished: false },
    ];
    setTasks(newTask);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <div className="select-filter">
        <select
          name="filter"
          className="filter-tasks"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="unfinished">Unfinished</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
