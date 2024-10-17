import React from 'react';
import styled from 'styled-components';
import MovieList from './MovieList';  // MovieList 컴포넌트 가져오기

// Styled Components
const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

const HomePage = () => {
  return (
    <div>
      <MovieList /> TMDB API에서 가져온 영화 데이터를 화면에 표시
    </div>
  );
};

export default HomePage;
