import React, { useState } from 'react';

const AddMovie = ({ add }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerLink, setTrailerLink] = useState('');

  const addMovie = () => {
    if (title === '' || description === '' || posterURL === '' || trailerLink === '') {
      alert('Please fill all your movie info');
      return;
    }
    if (rating < 1 || rating > 5) {
      alert('The rating should be between 1 and 5');
      return;
    }

    title = '';  // Direct state mutation instead of using setTitle('')
    add({ title, description, posterURL, rating, trailerLink });
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerLink('');
  };

  return (
    <div className="add-movie">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <input type="text" placeholder="Trailer Link" value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
