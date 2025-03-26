import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams(); // Retrieve the movie id from the URL

  // Sample movie data (this would usually be fetched from an API or passed down as props)
  const movies = [
    { id: 1, title: 'Interstellar', genre: 'Sci-Fi', description: 'In the mid-21st century, humanity faces extinction due to dust storms and widespread crop blights....', poster: 'Interstellar.jpg' },
    { id: 2, title: 'Inception', genre: 'Action', description: `Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious.`, poster: 'Inception.jpg' },
    { id: 3, title: 'Titanic', genre: 'Drama', description: 'A movie about love...', poster: 'Titanic.jpg' },
    { id: 4, title: 'Batman', genre: 'Fiction', description: 'A movie about a superhero...', poster: 'Batman.jpg' }
  ];

  const movie = movies.find(movie => movie.id === parseInt(id)); // Find the movie by ID

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <img 
        src={`/images/${movie.poster}`} 
        alt={movie.title} 
        style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
      />
      <p>{movie.description}</p>
      
      {/* Book Now Button */}
      <Link to={`/book/${movie.id}`} className="btn btn-success">
        Book Now
      </Link>
    </div>
  );
};

export default MoviePage;
