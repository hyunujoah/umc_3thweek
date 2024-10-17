// import {Outlet} from "react-router-dom";
// import Navbar from "../components/navbar.jsx";

// const RootLayout = () => {
//     return (
//         <>
//             <Navbar/>
//             <Outlet/>
//         </>
//     );
// };

// export default RootLayout;

import React from 'react';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa';  // react-icons를 사용

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #111;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #111;
`;

const NavbarTitle = styled(Link)`
  color: #ff0066;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  background-color: ${(props) => (props.primary ? '#ff0066' : '#333')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => (props.primary ? '#ff4081' : '#555')};
  }
`;

const Layout = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #222;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarButton = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    color: #ff0066;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #111;
`;

// Root Layout Component
const RootLayout = () => {
  return (
    <Container>
      <Navbar>
        <NavbarTitle to="/">YONGCHA</NavbarTitle>
        <NavButtons>
          <Button to="/login">로그인</Button>
          <Button to="/signup" primary>회원가입</Button>
        </NavButtons>
      </Navbar>
      <Layout>
        <Sidebar>
          <SidebarButton to="/search">
            <FaSearch /> 찾기
          </SidebarButton>
          <SidebarButton to="/movies">
            <FaFilm /> 영화
          </SidebarButton>
        </Sidebar>
        <MainContent>
          <Outlet />
        </MainContent>
      </Layout>
    </Container>
  );
};

export default RootLayout;