
const initialState = {
	category: [],
	sayi: 0,
};

const categoryReducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_CATEGORY':
			console.log('Addition worked');
		case 'DELETE_CATEGORY':
			console.log('Deletion worked');

		default:
			return state;
	}
};

export default categoryReducer;