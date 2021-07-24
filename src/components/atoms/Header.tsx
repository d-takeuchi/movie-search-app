import React, { memo, VFC } from 'react';
import styled from 'styled-components';

const SHeader = styled.header`
  height: 100px;
  display: flex;
  color: #001858;
  justify-content: center;
  align-items: center;
`;

const Header: VFC = memo(() => {
  return (
    <SHeader>
      <h1>映画検索アプリ</h1>
    </SHeader>
  );
});
export default Header;
