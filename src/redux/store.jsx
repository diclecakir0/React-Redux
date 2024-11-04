/*
-Store Creation:
-Import createStore and combineReducers from the Redux library.
-Categorize the data to be stored and create a reducer for each category.
-Combine the created reducers using combineReducers().
-Call the createStore method and provide the rootReducer as an argument.
-Export the store.
*/


import todoReducer from "./todoReducer";
import categoryReducer from "./categoryReducer";
import { createStore, combineReducers } from "redux";         

// The reducers are combined into a single entity
const rootReducer = combineReducers({todoReducer, categoryReducer});

// The store is created
const store = createStore(rootReducer);

export default store;