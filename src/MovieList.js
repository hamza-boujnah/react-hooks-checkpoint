import React from 'react';
import MovieCard from './MovieCard'; // Assuming you have a MovieCard component

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
