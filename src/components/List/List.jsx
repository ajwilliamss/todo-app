import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import ListTask from "./ListTask/ListTask";
import "./List.css";

const List = () => {
  const { filteredTasks } = useContext(FilterContext);

  return (
    <div className="container">
      <ul className="task-list">
        {filteredTasks.map((task) => {
          const { id } = task;
          return <ListTask key={id} {...task} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default List;
