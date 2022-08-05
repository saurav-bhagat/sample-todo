import React from "react";
import ToDoItem from "./ToDoItem";


function ToDoList(props){

    return(
        <React.Fragment>
            {
                props.todos.map((todo, index) => {
                    return (
                        <ToDoItem
                            todo={todo}
                            toggleComplete={props.toggleComplete}
                            deleteTodo={props.deleteTodo}
                            key={todo.id}
                        />
                    )
                })
            }
        </React.Fragment>
    );
}

export default ToDoList;