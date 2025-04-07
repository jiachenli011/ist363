import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Complete Lab 11", completed: false },
    { id: 2, task: "Review JSX Events and State", completed: false },
  ]);
  
  const [newTask, setNewTask] = useState("");
  const markCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (event) => {
    event.preventDefault();
    if (newTask) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, task: newTask, completed: false },
      ]);
      setNewTask(""); 
    }
  };

  return (
    <div>
      <h1>To Do List</h1>
      
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.task}
            <button onClick={() => markCompleted(task.id)}>X</button>
          </li>
        ))}
      </ul>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;
