import React from 'react';
import { useSelector } from 'react-redux';
import SingleTodo from './SingleTodo';

const ListTodos = () => {

	// Subscribing to the store
	const merkeziVeri = useSelector((store) => store.todoReducer);
  return (
  <div>
	{/*If the number of stored data is equal to 0, print it on the screen */}
	{merkeziVeri.sayi === 0 && <p>Please add a new task...</p>}

	{/* Rendering a card on the screen for each object in the array */}
	{merkeziVeri.todos.map((todo) => (
	<SingleTodo key={todo.id} todo={todo} />
	))}
  </div>
  );
  
};

export default ListTodos;
