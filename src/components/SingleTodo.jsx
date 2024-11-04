import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';



const SingleTodo = ({todo}) => {
	// Setting up the dispatch method
	const dispatch = useDispatch();
	// It works when the delete button is clicked
	const handleDelete = () => {
		// todo'yu api'den silme
		axios.delete(`http://localhost:3060/todos/${todo.id}`).then(()=>{
			// We dispatched the action indicating that we want to perform a delete operation to the reducer
			dispatch({
				type: 'DELETE_TODO',
				payload: todo.id,
			});
		});
	};

	// It works when the complete button is clicked
	const handleUpdate = () => {
		// Sending the element to be updated and its updated state to the store.
		const updatedTodo = {...todo, isDone: !todo.isDone};
		// Updating the data in the API
		axios.put(`http://localhost:3060/todos/${todo.id}`, updatedTodo).then(() => {
			// Sending the updated state to the reducer
			dispatch({
					type:'UPDATE_TODO',
					payload: updatedTodo,
				});
		});
		
	};

  return (
	<div className='card my-4'>
	  <div className='card-body'>
	  <h5>{todo.text}</h5>
	  <h6>{todo.isDone ? 'Completed' : 'Continuing'}</h6>
	  <p>{new Date(todo.date).toLocaleDateString()}</p>
	  <button onClick={handleUpdate}>{todo.isDone ? 'Undo' : 'Complete'}</button>
	  <button className='mx-3' onClick={handleDelete} >Delete</button>
	  </div>
	</div>
  );
};

export default SingleTodo;
