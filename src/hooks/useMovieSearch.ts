import { useCallback, useState, useContext } from 'react';

import { Movie } from '../types/api/movie';
import { SearchContext } from '../providers/SearchProvider';
import useMessage from './useMessage';

const useMovieSearch = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const { searchMovieTitle } = useContext(SearchContext);
  const { showMessage } = useMessage();

  const fetchMovies = useCallback(() => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?s=${searchMovieTitle}&apikey=d862db0`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Response === 'False') {
          throw new Error();
        }
        setMovies(responseJson.Search);
      })
      .catch(() => {
        showMessage({ title: '映画が見つかりません', status: 'error' });
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchMovieTitle]);

  return { loading, movies, fetchMovies };
};

export default useMovieSearch;
