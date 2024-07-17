import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import './Toolbar.css';

const Toolbar = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  return (
    <div className="toolbar">
      <select onChange={handleMovieChange} value={selectedMovie}>
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
      <RateMovieButton movie={selectedMovie} />
    </div>
  );
};

export default Toolbar;