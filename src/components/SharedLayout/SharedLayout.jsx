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
          <StyledNavLink>Home</StyledNavLink>
          <StyledNavLink>Movies</StyledNavLink>
        </NavContainer>
      </StyledNav>
      <Container></Container>
    </div>
  );
};
