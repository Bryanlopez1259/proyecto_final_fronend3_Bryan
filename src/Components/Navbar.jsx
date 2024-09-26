import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { ContextGlobal } from "../Components/utils/global.context.jsx";

const Navbar = () => {
  const { state, toggleTheme } = useContext(ContextGlobal);
  return (
    <nav>
      <div className="navContainer">
        <h2>Bryan Odontología</h2>
        <div className="linksNavbar">
          <Link to={routes.home}>
            <h3>Home</h3>
          </Link>
          <Link to={routes.contact}>
            <h3>Contacto</h3>
          </Link>
          <Link to={routes.favs}>
            <h3>Favs</h3>
          </Link>
          <button onClick={toggleTheme}>
            {state.theme === "light" ? "🌚" : "🌞"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
