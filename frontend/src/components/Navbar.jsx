import { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
const Navbar = (props) => {
  const { isMunuPage = false } = props;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">HOTEL DIAMOND SHINE</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          {!isMunuPage ? <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>: <div className="links"></div>}
          {!isMunuPage ? <button className="menuBtn"
          onClick={()=> navigate("/menu")}
          >OUR MENU</button> : <button className="menuBtn"
          onClick={()=> navigate("/")}>HOME</button>}
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  isMunuPage: PropTypes.bool,
};
