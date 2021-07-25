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
      <p style={{ color: 'white' }}>{title}</p>
      <p style={{ color: 'white' }}>{year}</p>
    </SMovieCard>
  );
});

export default MovieCard;
