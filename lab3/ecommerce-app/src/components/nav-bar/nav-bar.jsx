import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router";


const NavBar = () => {
  return (
    <div className="flex items-center justify-between gap-6 bg-gray-900 px-8 py-4 shadow-md">

      <div >
          <NavLink to="/" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faHome} />Home
          </NavLink>
      </div>
      <div className="flex gap-5">
          <NavLink to="/login" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faArrowRightToBracket} />Sign in
          </NavLink>
          <NavLink to="/register" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faUser} />Sign up
          </NavLink>
          <NavLink to="/cart" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
      </div>
     
    </div>
  );
};
export default NavBar;
