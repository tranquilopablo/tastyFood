import React from 'react';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

const TopNav = () => {
  return (
    <Nav>
      <Logo to={'/'}>
        <GiKnifeFork />
        tastyFood
      </Logo>
      <Search />
    </Nav>
  );
};

const Nav = styled.div`
  padding: 1rem 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    margin-bottom: 1rem;
    align-self: flex-start;
  }
`;

export default TopNav;
