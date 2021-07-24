import React, { memo, VFC, useState, useEffect } from 'react';

import Header from '../atoms/Header';

type Movie = {
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
  Poster: string;
};

const MovieList: VFC = memo(() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    setLoading(true);
    fetch('http://www.omdbapi.com/?s=iron&apikey=d862db0')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setMovies(responseJson.Search);
      })
      .catch(() => {
        // console.log('エラーです');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <p>Now Loading</p>
      ) : (
        movies.map((movie) => (
          <div>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt="ポスター" />
          </div>
        ))
      )}
    </>
  );
});

export default MovieList;
