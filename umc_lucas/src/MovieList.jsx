import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components for Movie Items
const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const MovieItem = styled.div`
  background-color: #222;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;

const MoviePoster = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MovieTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0 5px;
  color: white;
`;

const MovieDate = styled.p`
  font-size: 0.9em;
  color: #ccc;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '205f4bdf2770aca75748e606de538da0',  // 여기에 본인의 TMDB API 키를 입력하세요
          language: 'ko-KR',
          page: 1,
        },
      });
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <MovieGrid>
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDate>{movie.release_date}</MovieDate>
        </MovieItem>
      ))}
    </MovieGrid>
  );
};

export default MovieList;
