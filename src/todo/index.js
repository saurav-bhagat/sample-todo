
import { useState } from 'react';
import Header from '../components/Header';
import ToDoList from '../components/ToDoList';
import AddTodo from '../components/AddTodo';
import data from '../data/data.json';
import './todo.css';

function ToDoApp(){

    const [ todos, setTodos ] = useState(data);
    const [ todoItem, setTodoItem ] = useState('');

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo, index) => {
            if(todo.id === id){
                todo.complete = !todo.complete
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo, index) => {
            if(todo.id !== id){
                return todo;
            }
        });
        setTodos(newTodos);
    };

    const addTodo = () => {
        if(!todoItem){
            alert("Please enter todo item");
            return;
        }
        const newTodoItem = {
            id: todos.length + 1,
            task: todoItem,
            complete: false
        };
        setTodos([...todos, newTodoItem]);
        setTodoItem('');
        alert("todo added");
    }

    return(
        <div className="container">
            <Header />

            <AddTodo
                todoItem={todoItem}
                setTodoItem={setTodoItem}
                addTodo={addTodo}
            />

            <ToDoList 
                todos={todos} 
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default ToDoApp;