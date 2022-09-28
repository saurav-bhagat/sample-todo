

const ToDoList = ({ todos, toggleTodo, deleteTodo, handleEditTodo }) => {

    return (
        todos.map((todo, index) => {
            return (
                <div className="todo-item">
                    <p
                        onClick={() => toggleTodo(todo.id)}
                        className={ todo.complete? 'completed': 'not-completed' }
                    >
                        {todo.title}
                    </p>
                    <span 
                        className="delete-span"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </span>
                    <span 
                        className="delete-span"
                        onClick={() => handleEditTodo(todo.id)}
                    >
                        Edit
                    </span>
                </div>
            )
        })
    );
};

export default ToDoList;