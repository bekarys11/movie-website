import React, { useState, useEffect } from 'react';
import { FEATURED_API, SEARCH_API } from './components/API';
import Film from './components/Film';
import './style/app.css';

function App() {
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [startAnimation, setStartAnimation] = useState(
  //   'scroll 10s linear infinite'
  // );

  useEffect(() => {
    fetchFilms(FEATURED_API);
  }, []);

  const fetchFilms = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchFilms(SEARCH_API + searchTerm);
    }
    setSearchTerm('');
    // setStartAnimation('');
  };

  // const animationStyle = {
  //   animation: document.getElementsByClassName('film-container'),
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>
          <a href="./App.js" className="logo">
            LOGO
          </a>
          <input
            className="search"
            value={searchTerm}
            onChange={handleChange}
            type="search"
            placeholder="Search..."
          />
        </header>
      </form>
      <div className="film-container">
        {films.length > 0 &&
          films.map((film) => <Film key={film.id} {...film} />)}
      </div>
    </>
  );
}

export default App;
