// import './App.css'

// import {createBrowserRouter, RouterProvider} from "react-router-dom";

// import HomePage from "./pages/home.jsx";
// import NotFound from "./pages/not-found.jsx";
// import Movies from "./pages/movies.jsx";
// import RootLayout from "./layout/root-layout.jsx";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <RootLayout/>,
//         errorElement: <NotFound/>,
//         // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
//         children: [
//             {
//                 // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
//                 index: true,
//                 element: <HomePage/>
//             },
//             {
//                 // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
//                 path: 'movies',
//                 element: <Movies/>
//             }
//         ]
//     },

// ])

// function App() {
//     return <RouterProvider router={router}/>
// }

// export default App

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';  // 스타일을 위한 파일이므로 필요에 따라 작성하세요

// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
//         params: {
//           api_key: '205f4bdf2770aca75748e606de538da0',  // 본인의 TMDB API Key를 입력하세요
//           language: 'ko-KR',
//           page: 1,
//         },
//       });
//       setMovies(response.data.results);
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="app">
//       <header>
//         <h1>YONGCHA</h1>
//       </header>
//       <main>
//         <div className="movie-list">
//           {movies.map((movie) => (
//             <div key={movie.id} className="movie-item">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <h2>{movie.title}</h2>
//               <p>{movie.release_date}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './RootLayout';  // 레이아웃 파일
import HomePage from './HomePage';  // 홈 페이지
import LoginPage from './LoginPage';  // 로그인 페이지
import SignupPage from './SignupPage';  // 회원가입 페이지
import SearchPage from './SearchPage';  // 검색 페이지
import MovieList from './MovieList';  // 영화 목록 컴포넌트
import MovieCategories from './MovieCategories';  // 영화 카테고리 페이지
import CategoryMovies from './CategoryMovies';  // 카테고리별 영화 페이지

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="search" element={<SearchPage />} />
          {/* <Route path="movies" element={<MovieList />} /> */}
          <Route path="movies" element={<MovieCategories />} />  {/* 영화 카테고리 */}
          <Route path="movies/now-playing" element={<CategoryMovies category="now_playing" />} />  {/* 현재 상영중 */}
          <Route path="movies/popular" element={<CategoryMovies category="popular" />} />  {/* 인기있는 */}
          <Route path="movies/top-rated" element={<CategoryMovies category="top_rated" />} />  {/* 높은 평가 */}
          <Route path="movies/up-coming" element={<CategoryMovies category="upcoming" />} />  {/* 개봉 예정 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;