import React from "react";


function AddTodo(props){
    return(
        <React.Fragment>
            <input 
                value={props.todoItem}
                onChange={(e) => props.setTodoItem(e.target.value)}
                className="todo-input"
            />
            <button className="add-btn" onClick={props.addTodo}>Add</button>
        </React.Fragment>
    )
};

export default AddTodo;