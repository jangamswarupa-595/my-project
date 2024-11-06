/*import axios from "axios";

const API_KEY = "f3212f0b2183aa8699cfec7ed2a40793"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action Types
export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';

// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(${API_BASE_URL}/movie/popular, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
      timeout: 10000, // Set timeout to 30 seconds
    });

    dispatch({
      type: SET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    console.error('Error fetching movies:', error.message);

    dispatch({
      type: 'FETCH_MOVIES_FAILURE',
      payload: error.message,
    });
  }
};

// Add Movie Action
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

// Remove Movie Action
export const removeMovie = (movieId) => {
  return {
    type: REMOVE_MOVIE,
    payload: movieId,
  };
};

// Update Movie Action
export const updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  };
};

// Clear Movies Action
export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
};*/

/*import axios from "axios";

const API_KEY = "f3212f0b2183aa8699cfec7ed2a40793"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action Types
export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'; // Add this if you handle errors

// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, { // Fixed the template literal
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
      timeout: 10000, // Set timeout to 10 seconds
    });

    dispatch({
      type: SET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    console.error('Error fetching movies:', error.message);

    dispatch({
      type: FETCH_MOVIES_FAILURE, // Ensure your reducer handles this action
      payload: error.message,
    });
  }
};

// Add Movie Action
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

// Remove Movie Action
export const removeMovie = (movieId) => {
  return {
    type: REMOVE_MOVIE,
    payload: movieId,
  };
};

// Update Movie Action
export const updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  };
};

// Clear Movies Action
export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
}; */


// src/redux/movieActions.js

// Action Types
// src/redux/movieActions.js

//final


/*import axios from 'axios'; 
 // Verify this path
// Ensure axios is imported at the top of the file

// API constants
const API_KEY = "f3212f0b2183aa8699cfec7ed2a40793"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action Types
export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
      timeout: 10000,
    });

    dispatch({
      type: SET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    console.error('Error fetching movies:', error.message);

    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message,
    });
  }
};

// Add Movie Action
export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

// Remove Movie Action
export const removeMovie = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});

// Update Movie Action
export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

// Clear Movies Action
export const clearMovies = () => ({
  type: CLEAR_MOVIES,
});

/*import axios from 'axios';
// Example import if your actions are located in src/actions/movieActions.js

// API constants
const API_KEY = "f3212f0b2183aa8699cfec7ed2a40793"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action Types
export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
      timeout: 10000,
    });

    dispatch({
      type: SET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    console.error('Error fetching movies:', error.message);

    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message,
    });
  }
};

// Add Movie Action
export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

// Remove Movie Action
export const removeMovie = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});

// Update Movie Action
export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

// Clear Movies Action
export const clearMovies = () => ({
  type: CLEAR_MOVIES,
}); */

import axios from 'axios'; 

const API_KEY = "f3212f0b2183aa8699cfec7ed2a40793";
const API_BASE_URL = "https://api.themoviedb.org/3";

export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
      timeout: 10000,
    });

    dispatch({
      type: SET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message,
    });
  }
};

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const removeMovie = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});

export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

export const clearMovies = () => ({
  type: CLEAR_MOVIES,
});


// src/actions.js

/*import axios from 'axios'; 

const API_KEY = "f3212f0b2183aa8699cfec7ed2a40793";
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action types
export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const REMOVE_FIRST_MOVIE = 'REMOVE_FIRST_MOVIE';

// Action to fetch popular movies from the TMDB API
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
      timeout: 10000,
    });

    dispatch({
      type: SET_MOVIES,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MOVIES_FAILURE,
      payload: error.message,
    });
  }
};

// Action to add a new movie
export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

// Action to remove a movie by ID
export const removeMovie = (movieId) => ({
  type: REMOVE_MOVIE,
  payload: movieId,
});

// Action to update a movie
export const updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

// Action to clear all movies from the state
export const clearMovies = () => ({
  type: CLEAR_MOVIES,
});

// Action to remove the first movie from the list
export const removeFirstMovie = () => ({
  type: REMOVE_FIRST_MOVIE,
});*/
