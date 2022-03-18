import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import BurgerMenuButton from "../UI/BurgerMenuButton/BurgerMenuButton";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Pets",
    path: "/pets",
  },
  {
    label: "About",
    path: "/about",
  },
];

function Navigation() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    logout(() => {
      navigate("/");
    });
  }

  return (
    <div className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-blue-300">Animalack</h1>
            </NavLink>
          </div>

          <nav className="hidden md:flex flex-grow">
            <ul className="hidden md:flex flex-grow justify-end flex-wrap items-center">
              {navItems.map((navItem) => {
                return (
                  <li key={navItem.label} className="py-2">
                    <NavLink
                      to={navItem.path}
                      className="p-2 text-white transition-colors duration-300 rounded-md hover:text-blue-300 hover:bg-gray-900 focus:text-blue-300"
                    >
                      {navItem.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={handleLogout}
              className="p-2 text-white transition-colors duration-300 rounded-md hover:text-blue-300 hover:bg-gray-900 focus:text-blue-300"
            >
              Logout
            </button>
          </nav>

          <div className="-mr-2 flex md:hidden">
            <BurgerMenuButton
              className=""
              open={isOpen}
              onClick={handleToggleOpen}
              navItems={navItems}
            />
          </div>
        </div>

        {isOpen && (
          <div className="md-hidden" id="mobile-menu">
            {navItems.map((navItem) => {
              return (
                <div
                  key={navItem.label}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  <NavLink
                    to={navItem.path}
                    className="p-2 text-white transition-colors duration-300 rounded-md hover:text-blue-300 hover:bg-gray-900 focus:bg-gray-900 focus:text-blue-300"
                  >
                    {navItem.label}
                  </NavLink>
                </div>
              );
            })}
            <button
              onClick={handleLogout}
              className="px-4 pt-2 pb-3 space-y-1 sm:px-3 text-white transition-colors duration-300 rounded-md hover:text-blue-300 hover:bg-gray-900 focus:bg-gray-900 focus:text-blue-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
