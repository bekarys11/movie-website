const mykey = config.KEY;

export const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${mykey}&page=1`;
export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${mykey}&query=`;

export const IMG_API = 'https://image.tmdb.org/t/p/w1280';
