import React, { useState } from 'react';
import './App.css';

// MovieCard Component
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <img src={movie.posterURL} alt={movie.title} />
    </div>
  );
}

// MovieList Component
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

// Filter Component
function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => onRatingChange(parseFloat(e.target.value))}
      />
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Interstellar",
      description: "A science fiction film about space travel.",
      posterURL: "https://www.bing.com/ck/a?!&&p=f8e5131ab4dad588JmltdHM9MTY5ODUzNzYwMCZpZ3VpZD0yMGUxZGY1ZS1kODVmLTZlMzItMWE5OC1jZTJjZDkyODZmZjYmaW5zaWQ9NTQ3NA&ptn=3&hsh=3&fclid=20e1df5e-d85f-6e32-1a98-ce2cd9286ff6&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbnRlcnN0ZWxsYXIgcG9zdGVyJkZPUk09SVFGUkJBJmlkPUMyOERCRTFGREIwMUREMjU5NEU4REVFM0VEQzdBNTQyMjNDOENBRTM&ntb=1",
      rating: 4.5,
    },
    {
      title: "The Pursuit of Happyness",
      description: "A drama film based on a true story.",
      posterURL: "https://www.bing.com/ck/a?!&&p=3d030493a88a4bd0JmltdHM9MTY5ODUzNzYwMCZpZ3VpZD0yMGUxZGY1ZS1kODVmLTZlMzItMWE5OC1jZTJjZDkyODZmZjYmaW5zaWQ9NTUwMg&ptn=3&hsh=3&fclid=20e1df5e-d85f-6e32-1a98-ce2cd9286ff6&u=a1L2ltYWdlcy9zZWFyY2g_cT10aGUgcHVyc3VpdCBvZiBoYXBwaW5lc3MgcG9zdGVyJkZPUk09SVFGUkJBJmlkPTIwRURDMTZBQjFEOUU5MzM5NTkyNTQxMUQ1MDQ1ODY2RDJDRjBBQTA&ntb=1",
      rating: 4.7,
    },
    {
      title: "Work It",
      description: "A teen comedy film about dance.",
      posterURL: "https://www.bing.com/ck/a?!&&p=5f99e714cf00bd0eJmltdHM9MTY5ODUzNzYwMCZpZ3VpZD0yMGUxZGY1ZS1kODVmLTZlMzItMWE5OC1jZTJjZDkyODZmZjYmaW5zaWQ9NTUwMA&ptn=3&hsh=3&fclid=20e1df5e-d85f-6e32-1a98-ce2cd9286ff6&u=a1L2ltYWdlcy9zZWFyY2g_cT13b3JrK2l0K3Bvc3Rlcit3aXRoK25vK2NvcHlyaWdodCZpZD03Nzk2OURGMDJDMjE5MEQ5QTUzRjRGQkZGODcyODE2NUFEMzZEMTU0JkZPUk09SVFGUkJB&ntb=1",
      rating: 3.9,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = (titleFilter, ratingFilter) => {
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
      );
    });
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        onTitleChange={(titleFilter) => setTitleFilter(titleFilter)}
        onRatingChange={(ratingFilter) => setRatingFilter(ratingFilter)}
      />
      <MovieList movies={filterMovies(titleFilter, ratingFilter)} />
      <form onSubmit={addMovie}>
        {/* Input fields for adding a new movie */}
      </form>
    </div>
  );
}

export default App;

