import { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";

import './Navigation.scss'

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixedWrapper">
      <div className="logoWrapper">
        <NavLink to={"/"}>
        </NavLink>
      </div>
      <nav className="navWrapper">
        <BurgerMenu open={isOpen} onToggleOpen={handleToggleOpen} />
        <ul className={`navBar ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/Login">[Log in to the application so you can do stuff with it]</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
