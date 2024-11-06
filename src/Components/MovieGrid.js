/*import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieGrid.css";

const API_KEY = "9320f923d506550f84b0e5a4d4e6c97b";
const API_BASE_URL = "https://api.themoviedb.org/3";

const categoryEndpoints = {
  'Popular': `${API_BASE_URL}/movie/popular`,
  'Top Rated': `${API_BASE_URL}/movie/top_rated`,
  'Upcoming': `${API_BASE_URL}/movie/upcoming`,
  'Action': `${API_BASE_URL}/discover/movie?with_genres=28`,
  'Adventure': `${API_BASE_URL}/discover/movie?with_genres=12`,
  'Animation': `${API_BASE_URL}/discover/movie?with_genres=16`,
  'Comedy': `${API_BASE_URL}/discover/movie?with_genres=35`,
  'Horror': `${API_BASE_URL}/discover/movie?with_genres=27`,
  'Thriller': `${API_BASE_URL}/discover/movie?with_genres=53`,
};

const MovieGrid = ({ selectedCategory }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const categoryEndpoint = categoryEndpoints[selectedCategory] || categoryEndpoints['Popular'];
        const response = await axios.get(categoryEndpoint, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
          },
          timeout: 10000
        });
        setMovies(response.data.results);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Unable to fetch movies. Please try again later.");
        setMovies([]); // Clear movies on error
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchMovies();
  }, [selectedCategory]);

  return (
    <div className="movie-grid">
      {loading && <p>Loading movies...</p>}
      {error && <div className="error-message">{error}</div>}
      {movies.length === 0 && !loading && !error && <p>No movies found for this category.</p>}
      <div className="movie-grid-content">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150'}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid; */



/*import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieGridRedux = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={movie.poster_path}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6">{movie.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                Release Date: {movie.release_date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGridRedux;*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieGrid.css";

const API_KEY = "9320f923d506550f84b0e5a4d4e6c97b";
const API_BASE_URL = "https://api.themoviedb.org/3";

const categoryEndpoints = {
  'Popular': `${API_BASE_URL}/movie/popular`,
  'Top Rated': `${API_BASE_URL}/movie/top_rated`,
  'Upcoming': `${API_BASE_URL}/movie/upcoming`,
  'Action': `${API_BASE_URL}/discover/movie?with_genres=28`,
  'Adventure': `${API_BASE_URL}/discover/movie?with_genres=12`,
  'Animation': `${API_BASE_URL}/discover/movie?with_genres=16`,
  'Comedy': `${API_BASE_URL}/discover/movie?with_genres=35`,
  'Horror': `${API_BASE_URL}/discover/movie?with_genres=27`,
  'Thriller': `${API_BASE_URL}/discover/movie?with_genres=53`,
};

const MovieGrid = ({ selectedCategory }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const categoryEndpoint = categoryEndpoints[selectedCategory] || categoryEndpoints['Popular'];
        const response = await axios.get(categoryEndpoint, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
          },
          timeout: 10000
        });
        setMovies(response.data.results);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError("Unable to fetch movies. Please try again later.");
        setMovies([]); // Clear movies on error
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    fetchMovies();
  }, [selectedCategory]);

  const renderStars = (rating) => {
    const maxRating = 10;
    const starCount = 5;
    const starRating = Math.round((rating / maxRating) * starCount);

    return (
      <div className="star-rating">
        {[...Array(starCount)].map((_, index) => (
          <span key={index} className={`star ${index < starRating ? 'filled' : ''}`}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="movie-grid">
      {loading && <p>Loading movies...</p>}
      {error && <div className="error-message">{error}</div>}
      {movies.length === 0 && !loading && !error && <p>No movies found for this category.</p>}
      <div className="movie-grid-content">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150'}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <div className="rating">
              {renderStars(movie.vote_average)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;





