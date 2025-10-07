import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, isCompleted: false }]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleComplete(task.id)}>
              {task.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
     
