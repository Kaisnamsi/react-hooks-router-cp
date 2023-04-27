import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

const MovieDetails = ({movies}) => {
  const {idmovie} = useParams();
  const movie = movies.find((el)=>el.id == idmovie);
  console.log(movies)
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.description}</p>
      <iframe width="560" height="315" 
        src={movie.trailer} 
        title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      ></iframe>
      <Link to={`/`}>
        <Button variant="primary">Go somewhere</Button>
      </Link>
    </div>
  );
};

export default MovieDetails;
