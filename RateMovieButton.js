import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setConfirmation(true);
    setTimeout(() => setConfirmation(false), 3000);
  };

  return (
    <div>
      <h3>Rate {movie}</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} Star{star > 1 && 's'}
        </button>
      ))}
      {confirmation && <p>Thank you for rating {movie}!</p>}
    </div>
  );
};

export default RateMovieButton;