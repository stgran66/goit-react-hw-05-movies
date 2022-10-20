import { Outlet } from 'react-router-dom';
import {
  Container,
  NavContainer,
  StyledNav,
  StyledNavLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <StyledNav>
        <NavContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavContainer>
      </StyledNav>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
