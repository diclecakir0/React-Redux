import { useState,useEffect } from 'react';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import axios from 'axios';
import { useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch todo data from the API
    axios.get('http://localhost:3060/todos').then((res) =>
    // Send the data to the reducer
    dispatch({
      type: "SET_TODOS",
      payload: res.data,
    }));
  }, []);

  return (
    <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
      <h1>Redux</h1>
      <AddForm/>
      <ListTodos/>
    </div>
  );
}
 
export default App;
 