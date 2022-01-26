import ListTask from "./ListTask/ListTask";
import "./List.css";

const List = ({ tasks, setTasks, filteredTasks }) => {
  return (
    <div className="container">
      <ul className="task-list">
        {filteredTasks.map((task) => {
          const { id } = task;
          return (
            <ListTask
              key={id}
              {...task}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
