import { createContext, useState } from "react";

export const FilterContext = createContext([]);

const FilterProvider = ({ children }) => {
  const [filterTask, setFilterTask] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  return (
    <FilterContext.Provider
      value={{ filterTask, setFilterTask, filteredTasks, setFilteredTasks }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
