import "./Todo.css";

function Todo({ title, paragraph, onTodoDelete }) {
  function deleteTodo(id) {
    console.log("DeleteTodo()", title);
  }

  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
