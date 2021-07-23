import React, { useEffect, useState } from 'react';
import Header from './components/atoms/Header';

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
};

export default function App() {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  const url = 'http://www.omdbapi.com/?s=man&apikey=d862db0';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  return (
    <>
      <Header />
      {movies.map((movie) => (
        <>
          <h3>{movie.Title}</h3>
          <p>{`${movie.Year}年公開`}</p>
          <img src={movie.Poster} alt="ポスター" />
        </>
      ))}
    </>
  );
}
