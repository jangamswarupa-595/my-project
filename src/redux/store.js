// src/redux/store.js
// src/redux/store.js

/*import { createStore, combineReducers } from 'redux';
import moviesReducer from './reducers/moviesReducer'; // Make sure this path is correct

const rootReducer = combineReducers({
    movies: moviesReducer
});

const store = createStore(rootReducer);

export default store;*/

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Correctly import thunk
import moviesReducer from './reducers/moviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Create store with thunk middleware

export default store;



