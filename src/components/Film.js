import React, { useState, useEffect } from 'react';
import { IMG_API } from './API';

const Film = ({ title, poster_path, overview, vote_average }) => {
  const [voteColor, setVoteColor] = useState('');

  const handleVoteColor = () => {
    if (vote_average > 7) {
      setVoteColor('green');
    } else if (vote_average >= 5) {
      setVoteColor('orange');
    } else {
      setVoteColor('red');
    }
  };

  useEffect(() => {
    handleVoteColor();
  });

  const styleVote = {
    color: voteColor,
  };

  return (
    <div className="film">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg'
        }
        alt="title"
      />
      <div className="film-info">
        <h3>{title}</h3>
        <span style={styleVote}>{vote_average}</span>
      </div>
      <div className="film-overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Film;
