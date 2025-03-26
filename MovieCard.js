import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MovieCard = ({ title, poster, posterStyle }) => {
  return (
    <Card style={{ width: '18rem' }}>
      {/* Image source updated to use the public folder */}
      <Card.Img variant="top" src={`/images/${poster}`} style={posterStyle} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
