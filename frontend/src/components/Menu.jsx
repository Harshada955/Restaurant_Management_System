import { data } from "../restApi.json";
import PropTypes from "prop-types";
import classes from "./Menu.module.css";
import icons from "../assets/icons";
import Footer from "./Footer";
const Menu = (props) => {
  const { allMenus = [], isOurMenu = false } = props;
  const { vegIcon, nonVegIcon } = icons;
  const categories = [...new Set(allMenus.map((menu) => menu.category))];
  return (
    <>
      <section className={`menu ${isOurMenu && classes["our_menu"]}`} id="menu">
        <div className="container">
          {!isOurMenu ? (
            <>
              <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia
                  architecto. Soluta pariatur eius et recusandae veritatis.
                  Quasi, et molestias!
                </p>
              </div>
              <div className="dishes_container">
                {data[0].dishes.map((element) => (
                  <div className="card" key={element.id}>
                    <img src={element.image} alt={element.title} />
                    <h3>{element.title}</h3>
                    <button>{element.category}</button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={classes[""]}>
              {categories.map((category, index) => (
                <div className="menu_section" key={category}>
                  <div
                    className={`heading_section ${classes["our_menu_heading_section"]}`}
                  >
                    <h1 className="heading">{category}</h1>
                  </div>
                  <div
                    className={
                      index % 2 === 0
                        ? `${classes["section_menus"]} ${classes["section_menus_reversed"]}`
                        : classes["section_menus"]
                    }
                  >
                    <div
                      className={`${classes["section_menu_items"]} ${classes["section_menu_sub_Container"]}`}
                    >
                      {allMenus
                        .filter((menu) => menu.category === category)
                        .map((menu) => (
                          <div
                            className={classes["item_card"]}
                            key={menu.menuId}
                          >
                            <div className={`${classes["item_type_name"]}`}>
                              {menu.subCategory === "Veg" && (
                                <img
                                  src={vegIcon}
                                  alt=""
                                  className={classes["sub_category_icon"]}
                                />
                              )}
                              {menu.subCategory === "Non-Veg" && (
                                <img
                                  src={nonVegIcon}
                                  alt=""
                                  className={classes["sub_category_icon"]}
                                />
                              )}
                              <h3 className={`${classes["item_name"]}`}>
                                {menu.item}
                              </h3>
                            </div>
                            <p>
                              {menu.halfPrice > 0 && `${menu.halfPrice}/`}
                              {menu.fullPrice}
                            </p>
                          </div>
                        ))}
                    </div>
                    <img
                      className={`${classes["section_menu_image"]} ${classes["section_menu_sub_Container"]}`}
                      src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=2048x2048&w=is&k=20&c=0UD2e_KMbkkMcx4j9ZaxGf-z1nMHxch9hi3_0BQmuAo="
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {isOurMenu && (
        <Footer/>
      )}
    </>
  );
};

export default Menu;

Menu.propTypes = {
  allMenus: PropTypes.arrayOf(PropTypes.object),
  isOurMenu: PropTypes.bool,
};
