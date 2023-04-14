import { NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/register">
        Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        Login
      </NavLinkStyled>
    </div>
  );
};
