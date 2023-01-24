import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <MainFooter>
        <FooterUp>
        <Navbar>
          <ul>
            <Link to="/">About Us</Link>
            <Link to="/">Press</Link>
            <Link to="/">Blog</Link>
            <Link to="/">iOS</Link>
            <Link to="/">Android</Link>
          </ul>
        </Navbar>
        </FooterUp>
        <RightsReserved>
          <p></p>
        </RightsReserved>
      </MainFooter>
    );
  };
  export default Header;
  
  
  
  