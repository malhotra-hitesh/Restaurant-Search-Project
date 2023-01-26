import {  NavLink, useNavigate } from "react-router-dom";
import { MainHeader, Navbar, HeaderRight, RegNav } from "./Header.styles";
import LogoLuna from "../../assets/logo.svg"

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainHeader>
        <img alt="logo" src={LogoLuna} />
        <HeaderRight>
          <Navbar>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/search">Search</NavLink>
              <NavLink to="/">Profile</NavLink>
            </ul>
          </Navbar>
          <RegNav>
            <button type="button" id="signup" onClick={() => navigate("../sign-up")}>SIGNUP</button>
            <button type="button" id="login" onClick={() => navigate("../sign-in")}>LOGIN</button>
          </RegNav>
        </HeaderRight>
      </MainHeader>
    </>
  );
};
export default Header;
