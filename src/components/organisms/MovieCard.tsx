import React, { memo, VFC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  posterUrl: string;
  year: string;
};

const SMovieCard = styled.div`
  border-radius: 10px;
  background: white;
  box-shadow: #ddd 0px 0px 4px 2px;
  padding: 10px;
`;

const MovieCard: VFC<Props> = memo((props) => {
  const { title, posterUrl, year } = props;
  return (
    <SMovieCard>
      <img src={posterUrl} alt="ポスター" />
      <p>{title}</p>
      <p>{year}</p>
    </SMovieCard>
  );
});

export default MovieCard;
