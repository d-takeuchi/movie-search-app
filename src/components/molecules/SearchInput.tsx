import React, { VFC, memo, useContext, ChangeEvent } from 'react';

import styled from 'styled-components';
import { SearchContext } from '../../providers/SearchProvider';

const SContainer = styled.div`
  text-align: center;
`;

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
  width: 25%;
`;

const SButton = styled.button`
  padding: 5px 26px;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  background: #ffd803;
  &:hover {
    opacity: 0.8;
  }
`;

type Props = {
  fetchMovies: () => void;
};

const SearchInput: VFC<Props> = memo((props) => {
  const { fetchMovies } = props;
  const { searchMovieTitle, setSearchMovieTitle } = useContext(SearchContext);

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchMovieTitle(event.target.value);
  };

  return (
    <SContainer>
      <SInput
        placeholder="movie title"
        value={searchMovieTitle}
        onChange={onChangeSearchInput}
      />
      <SButton onClick={fetchMovies}>search</SButton>
    </SContainer>
  );
});

export default SearchInput;
