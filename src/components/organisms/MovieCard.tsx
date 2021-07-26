import React, { memo, VFC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  posterUrl: string;
  year: string;
};

const SMovieCard = styled.div`
  padding: 10px;
`;

const MovieCard: VFC<Props> = memo((props) => {
  const { title, posterUrl, year } = props;
  return (
    <SMovieCard>
      <img src={posterUrl} alt="ポスター" />
      <p style={{ color: '#272343' }}>{title}</p>
      <p style={{ color: '#272343' }}>{year}</p>
    </SMovieCard>
  );
});

export default MovieCard;
