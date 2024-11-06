/*const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, ...action.payload }
            : movie
        ),
      };

    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };

    default:
      return state;

  }
};


export default movieReducer; */
/*const initialState = {
  movies: []
};

const moviesReducer=(state = initialState, action) =>{
  switch (action.type) {
      case 'ADD_MOVIE':
          return {
              ...state,
              movies: [...state.movies, action.payload]
          };
      case 'REMOVE_MOVIE':
          return {
              ...state,
              movies: state.movies.filter(movie => movie.id !== action.payload.id)
          };
      default:
          return state;
  }
}

export default moviesReducer;*/

const initialState = {
  movies: [],
  loading: false,
  error: null
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
      case 'FETCH_MOVIES_REQUEST':
          return {
              ...state,
              loading: true
          };
      case 'FETCH_MOVIES_SUCCESS':
          return {
              ...state,
              loading: false,
              movies: action.payload
          };
      case 'FETCH_MOVIES_FAILURE':
          return {
              ...state,
              loading: false,
              error: action.error
          };
      default:
          return state;
  }
}

export default moviesReducer;


/*import { 
  SET_MOVIES, 
  ADD_MOVIE, 
  REMOVE_MOVIE, 
  UPDATE_MOVIE, 
  CLEAR_MOVIES, 
  FETCH_MOVIES_FAILURE, 
  REMOVE_FIRST_MOVIE 
} from './movieActions';

const initialState = {
  movies: [],
  loading: false,
  error: null
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
      case SET_MOVIES:
          return {
              ...state,
              loading: false,
              movies: action.payload,
              error: null
          };
      case ADD_MOVIE:
          return {
              ...state,
              movies: [...state.movies, action.payload],
          };
      case REMOVE_MOVIE:
          return {
              ...state,
              movies: state.movies.filter(movie => movie.id !== action.payload),
          };
      case REMOVE_FIRST_MOVIE:
          return {
              ...state,
              movies: state.movies.slice(1), // Remove the first movie
          };
      case UPDATE_MOVIE:
          return {
              ...state,
              movies: state.movies.map(movie => 
                  movie.id === action.payload.id ? action.payload : movie
              ),
          };
      case CLEAR_MOVIES:
          return {
              ...state,
              movies: [],
          };
      case FETCH_MOVIES_FAILURE:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      default:
          return state;
  }
}

export default moviesReducer;*/





  