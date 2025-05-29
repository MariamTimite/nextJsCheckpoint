import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <h2>DevFolio</h2>
      <NavLinks>
        <Link href="/">Accueil</Link>
        <Link href="/about">À Propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
