import React, { memo, VFC, useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../atoms/Header';
import { Movie } from '../../types/api/movie';
import MovieCard from '../organisms/MovieCard';

const SMovieArea = styled.div`
  text-align: center;
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`;

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
        <SMovieArea>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              posterUrl={movie.Poster}
              year={movie.Year}
            />
          ))}
        </SMovieArea>
      )}
    </>
  );
});

export default MovieList;
