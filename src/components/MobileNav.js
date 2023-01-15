import { useState } from "react";
// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
// import link from react-router-dom
import { Link } from "react-router-dom";
// import Framer Motion
import { motion } from "framer-motion";
// Menu variant to animate using Framer Motion
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    ease: [0.6, 0.01, -0.05, 0.9],
  },
};
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      {/* navigation button */}
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* Small screen menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* close Icon */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-4xl cursor-pointer absolute z-30 left-4 top-14 text-primary"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to="/" onClick={()=> setOpenMenu(!openMenu)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={()=> setOpenMenu(!openMenu)}>About</Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={()=> setOpenMenu(!openMenu)}>Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" onClick={()=> setOpenMenu(!openMenu)}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
