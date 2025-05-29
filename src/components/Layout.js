import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

// Styles avec Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 20px;
`;
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
    
  );
};

// Export du composant Layout
export default Layout;


