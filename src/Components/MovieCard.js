import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';

const MovieCard = ({film, handleRating}) => {
    const {title,rating,posterURL,description, id} = film;
  
    return (
        <Card style={{ width: '20rem' ,margin: '10px' }}>
            <Card.Img variant="top" src={posterURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Rating readonly onClick={handleRating} initialValue={rating} />
                <Link to={`/details/${id}`}>
                    <Button variant="primary">Go somewhere</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;
