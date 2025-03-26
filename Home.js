import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Home = ({ searchQuery }) => {
    const movies = [
        { id: 1, title: 'Interstellar', genre: 'Sci-Fi', poster: 'Interstellar.jpg' },
        { id: 2, title: 'Inception', genre: 'Action', poster: 'Inception.jpg' },
        { id: 3, title: 'Titanic', genre: 'Drama', poster: 'Titanic.jpg' },
        { id: 4, title: 'Batman', genre: 'Fiction', poster: 'Batman.jpg' }
    ];

    // Filter movies based on the search query (case insensitive search)
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const posterStyle = {
        height: '300px',  // Set height
        width: '287px',   // Set width
        objectFit: 'cover', // Ensure image covers the space without distortion
        margin: '0 10px'   // Add space between images
    };

    return (
        <div className="container mt-4">
            <h2>Featured Movies</h2>
            {/* Show filtered movies */}
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <div key={movie.id} style={{ marginBottom: '20px', textAlign: 'center' }}>
                            <img
                                src={`/images/${movie.poster}`} // Ensure the images are in the public/images folder
                                alt={movie.title}
                                style={posterStyle}
                            />
                            <div>
                                <h5>{movie.title}</h5>
                                <p>{movie.genre}</p>
                                {/* "Know More" Button */}
                                <Link 
                                    to={`/movies/${movie.id}`} // Link to the detailed movie page
                                    className="btn btn-primary"
                                >
                                    Know More
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies found. Try a different search.</p> // Display message when no movies match the search
                )}
            </div>
        </div>
    );
}

export default Home;
