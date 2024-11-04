import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
! Provider:
* Allows data stored in the store to be accessed by the application
*/
import {Provider} from 'react-redux';

import store from './redux/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
