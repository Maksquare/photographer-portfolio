// import image assets
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
// import Link from react-router-dom
import { Link } from "react-router-dom";
// import framer motion
import { motion } from "framer-motion";
// import local transition values
import { transition1 } from "../transitions";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
// import cursor context

const Portfolio = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      {/* image and text container */}
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb:8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-70%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-70%" }}
            transition={transition1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex flex-col lg:items-start "
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
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
            <Link className="btn mb-[30px] mx-auto lg:mx-0" to={"/contact"}>
              Hire me
            </Link>
          </motion.div>
          {/* List Images using Grid*/}
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
