import { data } from "../restApi.json";
import PropTypes from "prop-types";
const Menu = (props) => {
  const { allMenus = [], isOurMenu = false } = props;
  console.log(allMenus);
  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          {!isOurMenu && (
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
          )}
          <div className="heading_section">
            <h1 className="heading">STARTERS</h1>
          </div>
          <div className="dishes_container">
            {allMenus &&
              allMenus.map(
                (element) =>
                  element.category === "Starters" && (
                    <>
                      <div className="menu-card" key={element.id}>
                        <h3>{element.item}</h3>
                        <p>{element.halfPrice}</p>
                        <p>{element.fullPrice}</p>
                        <button>{element.category}</button>
                      </div>
                    </>
                  )
              )}
          </div>
          <div className="heading_section">
            <h1 className="heading">Main Course</h1>
          </div>
          <div className="dishes_container">
            {allMenus &&
              allMenus.map(
                (element) =>
                  element.category === "Main Course" && (
                    <>
                      <div className="menu-card" key={element.id}>
                        <h3>{element.item}</h3>
                        <p>{element.halfPrice}</p>
                        <p>{element.fullPrice}</p>
                        <button>{element.category}</button>
                      </div>
                    </>
                  )
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

Menu.propTypes = {
  allMenus: PropTypes.arrayOf(PropTypes.object),
  isOurMenu: PropTypes.bool,
};
