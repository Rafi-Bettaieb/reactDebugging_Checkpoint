import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import MovieDescription from './MovieDescription';
import moviesData from './moviesData';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovies = (newMov) => {  // Typo here
    const updatedMovies = [...movies, { ...newMov, id: movies.length }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const filterMovies = (info) => {
    const { title, rating } = info;
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase()) && (rating === '' && movie.rating === rating)  // Logical error here
    );
    setFilteredMovies(filtered);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <AddMovie add={addMovies} />
              <Filter filter={filterMovies} />
              <MovieList movies={filteredMovies} />
            </>
          }
          />
          <Route path="/movies/:id" element={<MovieDescription movies={movies} />} />  {/* Route path error */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
