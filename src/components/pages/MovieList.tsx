import React, { memo, VFC } from 'react';
import styled from 'styled-components';

import Header from '../atoms/Header';
import MovieCard from '../organisms/MovieCard';
import SearchInput from '../molecules/SearchInput';
import useMovieSearch from '../../hooks/useMovieSearch';

const SMovieArea = styled.div`
  text-align: center;
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`;

const SLoading = styled.p`
  text-align: center;
  font-size: 5rem;
  color: #272343;
`;

const MovieList: VFC = memo(() => {
  const { loading, movies, fetchMovies } = useMovieSearch();

  return (
    <>
      <Header />
      <SearchInput fetchMovies={fetchMovies} />
      {loading ? (
        <SLoading>Now Loading</SLoading>
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
