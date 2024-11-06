/*import React from "react";
import ResponsiveDrawer from "./Components/SideBar";
import Header from "./Components/Header";
import MovieGrid from "./Components/MovieGrid";
import MovieGridRedux from "./Components/MovieGridRedux";

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid/>
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;*/

/*import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ResponsiveDrawer from "./Components/SideBar";
import Header from "./Components/Header";
import MovieGrid from "./Components/MovieGrid";
import MovieGridredux from "./MovieGridredux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid />
        <MovieGridredux />
      </main>
    </Provider>
  );
}

export default App;*/

// src/App.js
/*import React from 'react';
import ResponsiveDrawer from './Components/SideBar';
import Header from './Components/Header';
import MovieGrid from './Components/MovieGrid';
import MovieGridRedux from './Components/MovieGridRedux';
import { Provider } from 'react-redux';
//import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <ResponsiveDrawer />
        <main style={{ marginLeft: '240px', marginTop: '64px' }}>
          <MovieGrid />
          <MovieGridRedux />
  
        </main>
      </div>
    </Provider>
  );
}

export default App;
*/

/*import React from 'react';
import ResponsiveDrawer from './Components/SideBar';
import Header from './Components/Header';
import MovieGrid from './Components/MovieGrid';
import MovieGridRedux from './Components/MovieGridRedux';

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid />
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;*/

//3

/*import React from 'react';
import ResponsiveDrawer from './Components/SideBar'; // Ensure this file exists
import Header from './Components/Header'; // Ensure this file exists
import MovieGrid from './Components/MovieGrid'; // Ensure this file exists
import MovieGridRedux from './Components/MovieGridRedux';

//import MovieReducer from './redux/MovieReducer'; // Correct if movieReducer.js is in src/redux/
 // Ensure this file exists

function App() {
  return (
    <div>
      <Header />
      <ResponsiveDrawer />
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid/>
      </main>
      <MovieGridRedux/>
    
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import ButtonAppBar from './Components/Header';
import PersistentDrawerLeft from './Components/SideBar';
import MovieGrid from './Components/MovieGrid';
import MovieGridRedux from "./Components/MovieGridRedux";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, updateMovie, clearMovies } from './redux/reducers/movieActions';
import { Box, Button, Toolbar } from '@mui/material';
//import YourComponent from './YourComponent';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: new Date().getTime(), // Unique ID for testing
      title: "New Movie",
      release_date: "2024-01-01",
      poster_path: "/path_to_new_movie_poster.jpg",
    };
    dispatch(addMovie(newMovie));
  };

  const handleRemoveMovie = () => {
    dispatch(removeMovie(movies[0]?.id));
  };

  const handleUpdateMovie = () => {
    const updatedMovie = {
      id: movies[0]?.id,
      title: "Updated Movie Title",
      release_date: "2025-01-01",
      poster_path: "/path_to_updated_movie_poster.jpg",
    };
    dispatch(updateMovie(updatedMovie));
  };

  const handleClearMovies = () => {
    dispatch(clearMovies());
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <PersistentDrawerLeft onCategorySelect={handleCategorySelect} />
      <Toolbar sx={{ justifyContent: 'center', marginTop: '64px' }}>
        <Box sx={{ display: 'grid', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
          <Button variant="contained" color="primary" onClick={handleRemoveMovie}>
            Remove First Movie
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpdateMovie}>
            Update First Movie
          </Button>
          <Button variant="contained" color="primary" onClick={handleClearMovies}>
         
          
            Clear Movies
          </Button>
        </Box>
      </Toolbar>
      <main style={{ marginLeft: "240px", marginTop: "32px" }}>
        <MovieGrid selectedCategory={selectedCategory} />
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;


/*import React, { useState } from 'react';
import ButtonAppBar from './Components/Header';
import PersistentDrawerLeft from './Components/SideBar';
import MovieGridRedux from './Components/MovieGridRedux';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, updateMovie, clearMovies } from './redux/movieActions';
import { Box, Button, Toolbar } from '@mui/material';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: new Date().getTime(), // Unique ID for the new movie
      title: "New Movie",
      release_date: "2024-01-01",
      poster_path: "/path_to_new_movie_poster.jpg",
    };
    dispatch(addMovie(newMovie));
  };

  const handleRemoveMovie = () => {
    if (movies.length > 0) {
      dispatch(removeMovie(movies[0]?.id));
    }
  };

  const handleUpdateMovie = () => {
    if (movies.length > 0) {
      const updatedMovie = {
        id: movies[0]?.id,
        title: "Updated Movie Title",
        release_date: "2025-01-01",
        poster_path: "/path_to_updated_movie_poster.jpg",
      };
      dispatch(updateMovie(updatedMovie));
    }
  };

  const handleClearMovies = () => {
    dispatch(clearMovies());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <ButtonAppBar />
      <PersistentDrawerLeft onCategorySelect={handleCategorySelect} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
          <Button variant="contained" color="secondary" onClick={handleUpdateMovie}>
            Update First Movie
          </Button>
          <Button variant="contained" color="warning" onClick={handleRemoveMovie}>
            Remove First Movie
          </Button>
          <Button variant="contained" color="error" onClick={handleClearMovies}>
            Clear Movies
          </Button>
        </Box>
        <MovieGridRedux />
      </Box>
    </Box>
  );
}

export default App;*/

/*import React, { useState } from 'react';
import ButtonAppBar from './Components/Header';
import PersistentDrawerLeft from './Components/SideBar';
import MovieGridRedux from './Components/MovieGridRedux';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, updateMovie, clearMovies } from './redux/movieActions';
import { Box, Button, Toolbar } from '@mui/material';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: new Date().getTime(), // Unique ID for the new movie
      title: "New Movie",
      release_date: "2024-01-01",
      poster_path: "/path_to_new_movie_poster.jpg",
    };
    dispatch(addMovie(newMovie));
  };

  const handleRemoveMovie = () => {
    if (movies.length > 0) {
      dispatch(removeMovie(movies[0]?.id));
    }
  };

  const handleUpdateMovie = () => {
    if (movies.length > 0) {
      const updatedMovie = {
        id: movies[0]?.id,
        title: "Updated Movie Title",
        release_date: "2025-01-01",
        poster_path: "/path_to_updated_movie_poster.jpg",
      };
      dispatch(updateMovie(updatedMovie));
    }
  };

  const handleClearMovies = () => {
    dispatch(clearMovies());
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <ButtonAppBar />
      <PersistentDrawerLeft onCategorySelect={handleCategorySelect} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
          <Button variant="contained" color="secondary" onClick={handleUpdateMovie}>
            Update First Movie
          </Button>
          <Button variant="contained" color="warning" onClick={handleRemoveMovie}>
            Remove First Movie
          </Button>
          <Button variant="contained" color="error" onClick={handleClearMovies}>
            Clear Movies
          </Button>
        </Box>
        <MovieGridRedux />
      </Box>
    </Box>
  );
}

export default App;*/


