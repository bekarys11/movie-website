import React, { useState, useEffect } from 'react';
import { FEATURED_API, SEARCH_API } from './components/API';
import Film from './components/Film';
import { FiSearch } from 'react-icons/fi';
import './style/app.css';

function App() {
  const [films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearched, setIsSearched] = useState(false);

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
    setIsSearched(true);
  };

  const movieList = {
    animation: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <header>
          <a href="https://simply-movposters.netlify.app/" className="logo">
            MOV
          </a>
          <input
            className="search"
            value={searchTerm}
            onChange={handleChange}
            type="search"
            placeholder="Search..."
          />
          <button type="submit" value="submit" className="button">
            <FiSearch />
          </button>
        </header>
      </form>
      <div className="film-container" style={isSearched ? movieList : null}>
        {films.length > 0 &&
          films.map((film) => <Film key={film.id} {...film} />)}
      </div>

      <script type="text/javascript" src="./config.js"></script>
    </>
  );
}

export default App;
