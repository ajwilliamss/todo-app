import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TaskProvider from "./contexts/TaskContext";
import FilterProvider from "./contexts/FilterContext";

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
