// import an image asset
import WonImg from "../img/about/woman.png";
import Aziz from "../img/about/about_1.png";
// import Link from react-router-dom
import { Link } from "react-router-dom";
// Import framer motion
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { Helmet } from "react-helmet";

const About = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
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
      <Helmet>
        <title>About</title>
      </Helmet>

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
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <img src={Aziz} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-70%" }}
            transition={transition1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex-1 pt-36  pb-1 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1">
              {" "}
              About <span className="text-accent_secondary">Me</span>
            </h1>
            <p className="mb-5">
              I am a <b>wildlife photographer</b> who loves capturing the beauty
              and mystery of nature.
              <b>
                {" "}
                I strive to capture images that are both stunning and inspiring,
                showing the natural world in its entirety.
              </b>
              I love spending time out in the field, capturing the unique
              moments that make up nature's story.
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
