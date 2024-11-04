/*
	! reducer:
	* Decides how the store will change
	* Reducer is a function and takes two parameters:
	? a - State: the latest state of the data held in the reducer
 	? b - Action: will receive the actions sent to the reducer and update the store based on their types

	* Steps for creating a reducer
	initialState > The initial state is defined
	1- The values that the state will have at the moment the application starts are defined; this initial value is called the initial state.
	* The initialState value is assigned to the state. > state = initialState
	2- We take the action as a parameter.
	* We define how the store should be affected based on the action's type value
	3- The reducer is exported to introduce it to the store

*/


const initialState = {
	todos:[],
	sayi: 0
}

// What is returned from the reducer will be the final value of the store.
const todoReducer = (state = initialState, action) => {
	switch (action.type){
		// The add action is executed as soon as it is dispatched
		case "ADD_TODO": 
			console.log('Ekleme Çalıştı', action);
			return {
				...state, todos: [...state.todos, action.payload],
				sayi : state.sayi + 1, 
			}

			// It executes when the delete action occurs.
		case "DELETE_TODO":
			
			const filtredTodos = state.todos.filter((item) => item.id !== action.payload);

			return {
				...state, 
				// We introduce the filtered array to the store
				todos: filtredTodos,
				sayi: state.sayi - 1,
			};

			// It executes when the update action occurs
		case "UPDATE_TODO":
			const cloneTodos = state.todos;
			// Finding the index of the element to be edited in the array
			const i = cloneTodos.findIndex((item) => item.id === action.payload.id);
			// We assigned a new value to the element
			cloneTodos[i] = action.payload;	
 
			return{
				...state, 
				todos: cloneTodos, 
			};

			//Clearing the store

			case "CLEAR":
				return{
					...state, todos:[],
				};
			
				// Transferring the response from the API to the store 
			case "SET_TODOS":
				return{
					...state, todos: action.payload, sayi: action.payload.length,
				};

		default:
			return state;
	}
};

export default todoReducer;
