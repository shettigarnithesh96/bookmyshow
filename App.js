import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import BookingPage from './pages/BookingPage'; // Import BookingPage

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} /> {/* Pass handleSearch function to Header */}
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
