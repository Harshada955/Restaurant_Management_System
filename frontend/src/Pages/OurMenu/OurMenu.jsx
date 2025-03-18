import { useCallback, useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import { fetchAllMenus } from "../../services/menu-service";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";

const OurMenu = (props) => {
  const { isOrderMenu = false } = props;
  const [allMenus, setAllMenus] = useState(null);
  const getAllMenus = useCallback(async () => {
    await fetchAllMenus()
      .then((res) => {
        setAllMenus(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // console.log(allMenus);
      });
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    getAllMenus();
  }, [getAllMenus]);
  return (
    <div>
      <Navbar isMunuPage={true} />
      <Menu
        isOurMenu={true}
        isOrderMenu={isOrderMenu}
        allMenus={allMenus?.menus}
      />
      {!isOrderMenu && <Footer />}
    </div>
  );
};

export default OurMenu;

OurMenu.propTypes = {
  isOrderMenu: PropTypes.bool,
};
