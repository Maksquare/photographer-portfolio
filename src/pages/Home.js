// Import Image asset
import WomanImg from "../img/home/woman.png";
import BgImg from "../img/home/home_1.png";
// import Link from react-router-dom
import { Link } from "react-router-dom";
// Import framer motion
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
// import local transition
const Home = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
  const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and image Container */}
        <div className=" flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Wildlife <br /> <span className="text-accent_secondary"> Photographer </span>
              {/* photographer <br /> & film Maker */}
            </h1>
            <p className="text-[26px] lg:text-[36px] mb-4 lg:mb-12">
              Addis Ababa, Ethiopia
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="relative  lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={BgImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
