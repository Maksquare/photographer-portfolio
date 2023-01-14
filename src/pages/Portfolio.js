// import image assets
import Image1 from "../img/portfolio/aziz/1.jpg";
import Image2 from "../img/portfolio/aziz/2.jpg";
import Image3 from "../img/portfolio/aziz/3.jpg";
import Image4 from "../img/portfolio/aziz/4.jpg";
import Image5 from "../img/portfolio/aziz/5.jpg";
import Image6 from "../img/portfolio/aziz/6.jpg";
import Image7 from "../img/portfolio/aziz/7.jpg";
import Image8 from "../img/portfolio/aziz/8.jpg";
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
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
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
            <h1 className="h1 text-accent_secondary">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              I am a <b> wildlife photographer </b>with over 10 years of
              experience capturing the natural beauty of animals in their
              habitats. I have a passion for photographing all types of
              wildlife, from the smallest creatures to the largest mammals, and
              enjoy working in difficult and remote locations.{" "}
              <b> My photographs </b> have been featured in national magazines
              and online publications, and I have won numerous awards for my
              work.
              <b>
                I am a highly skilled photographer with a great eye for detail,{" "}
              </b>
              and I am confident that my skills will translate well to a career
              in wildlife photography.
            </p>
            <Link className="btn mb-[30px] mx-auto lg:mx-0" to={"/contact"}>
              Hire me
            </Link>
          </motion.div>
          {/* List Images using Grid*/}
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="grid grid-cols-4  lg:gap-2"
          >
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
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image5}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image6}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image7}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image8}
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
