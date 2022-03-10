import { useContext } from "react";
import { TaskContext } from "../../../contexts/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ListTask.css";

const ListTask = ({ content, task }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  // Toggle finished property of task object
  const handleFinished = () => {
    const updatedTasks = tasks.map((item) => {
      const { finished } = item;
      if (item.id === task.id) {
        return { ...task, finished: !finished };
      } else {
        return item;
      }
    });
    setTasks(updatedTasks);
  };

  /* Assign result of filter method to variable 
  and pass that variable to setState function. 
  This ensures the state is not accidentally mutated */
  const handleDelete = () => {
    const deletedTasks = tasks.filter((item) => item.id !== task.id);
    setTasks(deletedTasks);
  };

  return (
    <div className="task">
      <li className={`task-item ${task.finished && "finished"}`}>{content}</li>
      <button type="button" className="finished-btn" onClick={handleFinished}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </button>
      <button type="button" className="delete-btn" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ListTask;
