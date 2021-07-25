import React, { VFC, memo, useContext } from 'react';

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
  background: #f9bc60;
`;

const SearchInput: VFC = memo(() => {
  const { searchMovieTitle, setSearchMovieTitle } = useContext(SearchContext);

  const onChangeSearchInput = (event: any) => {
    setSearchMovieTitle(event.target.value);
  };

  return (
    <SContainer>
      <SInput
        placeholder="映画タイトルを入力してください"
        value={searchMovieTitle}
        onChange={onChangeSearchInput}
      />
      <SButton>検索</SButton>
    </SContainer>
  );
});

export default SearchInput;
