import axios from 'axios';
import { useState} from 'react';
import { useSelector, useDispatch  } from 'react-redux';

const AddForm = () => {
	// Setting up the dispatch method
	const dispatch = useDispatch();
	// Subscribing
	const store = useSelector((store) => store.todoReducer);

	const [text, setText] = useState('');
	
	
	// Transfer the data to the store when the form is submitted
	const handleSubmit = (e) => {
		e.preventDefault();
		// An object containing todo data has been created
		const newTodo = {
			id: new Date().getTime(),
			text, 
			isDone: false,
			date: new Date(),
		};

		// Transferring the created object to the API
		axios.post(`http://localhost:3060/todos`, newTodo).then(()=>{
		/*
			? Update the store if the transfer to the API is successful;
			! Transferring the created object to the store
			* The only way to make changes in the store is to dispatch an action to the reducer using the dispatch method.
		*/

		dispatch({
			type:"ADD_TODO",
			payload: newTodo,
		});

		}).catch((err)=> alert('We are sorry, but the operation cannot be completed due to an error on our servers.'));
		
	}; 

	// It works when the 'Delete All' button is clicked
	const handleClear = () => {
		store.todos.forEach((todo) => axios.delete(`http://localhost:3060/todos/${todo.id}`));
		dispatch({
			type: 'CLEAR',
		}); 
	};


  return(

	<>
	<form className='d-flex align-items-center justify-content-center' onSubmit={handleSubmit}>
		<input type="text" onChange={(e) => setText(e.target.value)}/>
		
		<button>Add</button>
	</form>
	<button className='bg-danger' onClick={handleClear}>Delete All</button>
	</>
  ) 
  
};

export default AddForm;
