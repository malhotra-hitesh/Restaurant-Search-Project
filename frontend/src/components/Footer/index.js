import { Link, NavLink } from "react-router-dom";
import Google from "../../assets/googleplus.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import { MainFooter, FooterUp, Navbar, SocialMedia } from "./Footer.styles";

const Footer = () => {
  return (
    <>
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
        <SocialMedia>
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Google} />
          <img src={Instagram} />
        </SocialMedia>
      </FooterUp>
      <p>© Copyright Luna 2018</p>
    </MainFooter>
    </>
  );
};
export default Footer;



