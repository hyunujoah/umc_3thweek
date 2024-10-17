import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled Components
const CategoriesGrid = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const CategoryCard = styled(Link)`
  display: block;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  text-decoration: none;
  width: 200px;
  font-size: 1.2rem;
  &:hover {
    background-color: #444;
  }
`;

// 영화 카테고리 페이지
const MovieCategories = () => {
  return (
    <CategoriesGrid>
      <CategoryCard to="/movies/now-playing">현재 상영중인</CategoryCard>
      <CategoryCard to="/movies/popular">인기있는</CategoryCard>
      <CategoryCard to="/movies/top-rated">높은 평가를 받은</CategoryCard>
      <CategoryCard to="/movies/up-coming">개봉 예정중인</CategoryCard>
    </CategoriesGrid>
  );
};

export default MovieCategories;
