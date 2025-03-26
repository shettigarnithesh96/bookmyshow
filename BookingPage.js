import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams(); // Retrieve the movie id from the URL
  const [numberOfTickets, setNumberOfTickets] = useState(1); // Manage state for tickets

  // Sample movie data (you could fetch this from an API or pass it from the MoviePage)
  const movies = [
    { id: 1, title: 'Interstellar', genre: 'Sci-Fi' },
    { id: 2, title: 'Inception', genre: 'Action' },
    { id: 3, title: 'Titanic', genre: 'Drama' },
    { id: 4, title: 'Batman', genre: 'Fiction' }
  ];

  const movie = movies.find(movie => movie.id === parseInt(id)); // Find the movie by ID

  const handleBooking = () => {
    alert(`Booking confirmed for ${numberOfTickets} tickets for ${movie.title}`);
  };

  return (
    <div className="container mt-4">
      <h2>Book Tickets for {movie.title}</h2>
      <p>Genre: {movie.genre}</p>

      <div>
        <label htmlFor="tickets">Number of Tickets:</label>
        <input
          type="number"
          id="tickets"
          value={numberOfTickets}
          onChange={(e) => setNumberOfTickets(e.target.value)}
          min="1"
          max="10"
        />
      </div>

      <button onClick={handleBooking} className="btn btn-primary mt-3">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
