// Import Components
import Socials from "../components/Socials";
import Logo from "../img/header/aziz_logo.svg";
import MobileNav from "../components/MobileNav";
// Import Link from react-router-dom
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
// Import cursor context

const Header = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext)
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center ">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          to={"/"} className='max-w-[130px]'>
          <img width={'250px'} src={Logo} alt="" />
        </Link>
        {/* Nav initially hidden - shown on desktop screen */}
        <nav
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          className="hidden xl:flex gap-x-12 font-semibold ">
          {/* Home Link */}
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          {/* About Link */}
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          {/* Portfolio Link */}
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          {/* Contact Link */}
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Social Links */}
      <Socials />
      {/* Mobile Navigation Menu */}
      <MobileNav />
    </header>
  );
};

export default Header;
