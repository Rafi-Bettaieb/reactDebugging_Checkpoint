import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {/* Incorrect key and prop name */}
    {movies.map((movie) => (
      <MovieCard key={movie.title} mov={movie} /> {/* Using movie.title as key and incorrect prop name */}
    ))}
  </div>
);

export default MovieList;
