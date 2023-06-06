import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const currentTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );
  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask));
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList onDeleteTask={handleDeleteTask} tasks={currentTasks} />
    </div>
  );
}

export default App;
