// import an image asset
import WonImg from "../img/about/woman.png";
// import Link from react-router-dom
import { Link } from "react-router-dom";
// Import framer motion
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext)
  const transition1 = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
    // ease: [0.43, 0.13, 0.23, 0.96],
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and image container */}
        <div
          className="flex flex-col lg:flex-row h-full items-center justify-center
          gap-x-24 text-center lg:text-left lg:pt-16
        "
        >
          {/* image */}
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WonImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-70%" }}
            transition={transition1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1"> About Me</h1>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              praesentium
              <b>veniam molestiae repudiandae quaerat saepe rerum,</b>
              alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Saepe, odio.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              temporibus corrupti cumque beatae repudiandae velit.
            </p>
            <Link className="btn" to={"/portfolio"}>
              Visit My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
