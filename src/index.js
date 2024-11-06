/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Ensure this path is correct
import App from './Components/App'; // Adjust if the App component path is different

ReactDOM.render(
  <Provider store={store}> {/* Provide the Redux store *//*}
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();*/


/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Corrected path
import App from './Components/App'; // Correct path
ReactDOM.render(
  <Provider store={store}> 
  <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals(); */

//3

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import store from './redux/store'; // Import your Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
