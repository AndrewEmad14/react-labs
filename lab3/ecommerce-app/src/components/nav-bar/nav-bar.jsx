import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { languageContext } from "../../context/language";
import { useContext } from "react";
import Badge from "./badge";
const NavBar = () => {
  const {language,setLanguage} = useContext(languageContext);
  return (
    <div  dir={language === 'ar' ? 'rtl' : 'ltr'} className="flex items-center justify-between gap-6 bg-gray-900 px-8 py-4 shadow-md">

      <div >
          <NavLink to="/" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faHome} />Home
          </NavLink>
      </div>
      <div className="flex gap-5">
          <button className="text-gray-300 hover:text-white transition-colors" onClick={()=>setLanguage(language === 'ar'? 'en' : 'ar')}>{language}</button>
          <NavLink to="/login" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faArrowRightToBracket} />Sign in
          </NavLink>
          <NavLink to="/register" end className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <FontAwesomeIcon icon={faUser} />Sign up
          </NavLink>
          <NavLink to="/cart" end className=" relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <div className="realtive">
                <FontAwesomeIcon  icon={faCartShopping} />
                <Badge />
            </div>
            
          </NavLink>
      </div>
     
    </div>
  );
};
export default NavBar;
