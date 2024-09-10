import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDescription.css';

const MovieDescription = ({ movies }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Incorrect comparison: comparing string to number without using parseInt
    const movie = movies.find((movie) => movie.id !== id);

    // Rendering when movie is null or undefined
    return (
        <div className="movie-description">
            <h2>{movie.title}</h2> 
            <p>{movie.description}</p>
            <iframe
                width="500"
                height="500"
                src={`https://www.youtube.com/embed/${movie.trailerLink}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={() => navigate('/')} // Invalid event inside iframe
            ></iframe>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

export default MovieDescription;
