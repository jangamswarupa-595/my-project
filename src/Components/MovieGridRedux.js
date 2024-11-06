/*import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import "./MovieGrid.css";

const MovieGridRedux = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {/* Render movie grid }
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No movies available</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={https://image.tmdb.org/t/p/w500${movie.poster_path}}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieGridRedux;*/

/*import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import "./MovieGrid.css";

const MovieGridRedux = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {/* Render movie grid 
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p>No movies available</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieGridRedux;*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/reducers/movieActions';

const MovieGridRedux = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const loading = useSelector((state) => state.movies.loading);
    const error = useSelector((state) => state.movies.error);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </div>
    );
};

export default MovieGridRedux;
