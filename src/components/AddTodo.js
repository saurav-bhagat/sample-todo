import { useEffect } from "react";


const AddTodo = ({ todoItem, setTodoItem, addTodo, editTodo, updateTodo }) => {

    useEffect(() => {
        setTodoItem(editTodo?.title);
    }, [ editTodo?.title ]);

    return (
        <>
            <input 
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                className="todo-input"
            />
            <button className="add-btn" onClick={editTodo?.title ? () => updateTodo(editTodo) : addTodo}>
                {editTodo?.title ? 'Update' : 'Add'}
            </button>
        </>
    );
};

export default AddTodo;