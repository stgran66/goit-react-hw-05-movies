import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 480px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }

  margin: auto;
`;

export const NavContainer = styled.nav`
  width: 480px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
  display: flex;
  margin: auto;
  gap: 40px;
`;

export const StyledNav = styled.header`
  background-color: #a31525;
  border-bottom: 1px solid black;
  box-shadow: 0 8px 6px -6px black;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
`;
