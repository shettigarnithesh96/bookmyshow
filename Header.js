import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';  // Bootstrap components

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);  // Pass search query to parent (App.js)
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center w-100">
        {/* Logo and Navigation Links (Home, Movies, Booking) */}
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="mr-3">BookMyShow-2.0</Navbar.Brand>
          
          {/* Navigation Links */}
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="text-light">Movies</Nav.Link>
            <Nav.Link as={Link} to="/book" className="text-light">Booking</Nav.Link>
          </Nav>
        </div>

        {/* Search Bar and Button */}
        <div className="d-flex align-items-center w-50">  {/* Adjust the width of search bar container */}
          <Form inline className="d-flex w-100">
            <FormControl
              type="text"
              placeholder="Search for movies"
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}  // Update search query
              style={{ width: '100%' }}  // Make the search bar take up full width of its parent
            />
            <Button variant="outline-info" onClick={handleSearch} className="ml-2">
              Search
            </Button>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
