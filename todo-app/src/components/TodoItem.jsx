function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;