import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

const MovieList = ({ movies, posterStyle }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} sm={12} md={6} lg={4}>
          <MovieCard title={movie.title} poster={movie.poster} posterStyle={posterStyle} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
