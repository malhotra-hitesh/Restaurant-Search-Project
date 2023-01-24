import { Link, NavLink } from "react-router-dom";
import { MainHeader, Navbar } from "./Header.styles";
import logo from ".. /assets/logo.svg"

const Header = () => {
  return (
    <>
      <MainHeader>
        <img src=
        <Navbar>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Search</NavLink>
            <NavLink to="/">Profile</NavLink>
          </ul>
        </Navbar>
      </MainHeader>
    </>
  );
};
export default Header;
