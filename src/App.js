import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {

	const [ todoItem, setTodoItem ] = useState('');
	const [ todos, setTodos ] = useState([]);
	const [ editTodo, setEditTodo ] = useState(null);

	const addTodo = () => {
		const newTodoItem = {
			title: todoItem,
			completed: false,
			id: Date.now()
		}
		setTodos([newTodoItem, ...todos]);
		localStorage.setItem('todos', JSON.stringify([newTodoItem, ...todos]));
		setTodoItem('');
	};

	const updateTodo = (editedTodo) => {
		const updatedTodo = {
			title: todoItem,
			id: editedTodo.id,
			complete: editedTodo.complete
		};

		const newTodos = todos.map((todo) => {
			if(todo.id === editedTodo.id){
				return updatedTodo;
			}
			return todo;
		});
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
		setTodoItem('');
	};

	const toggleTodo = (id) => {
		const newTodos = todos.map((todo, index) => {
			if(todo.id === id){
				todo.complete = true;
			}
			return todo;
		});
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	const deleteTodo = (id) => {
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	const handleEditTodo = (id) => {
		const todo = todos.filter((todo) => todo.id === id);
		setEditTodo(todo[0]);
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		if(todos?.length > 0) {
			setTodos(todos);
		}
	}, []);

	return (
    	<div className="App">
			<h1>ToDO Application</h1>

			<AddTodo 
				todoItem={todoItem}
				setTodoItem={setTodoItem}
				addTodo={addTodo}
				editTodo={editTodo}
				updateTodo={updateTodo}
			/>

			<ToDoList
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
				handleEditTodo={handleEditTodo}
			/>
    	</div>
  	);
}

export default App;
