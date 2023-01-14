import { Link } from "react-router-dom";
// import image assets
import WomanImg from "../img/contact/woman.png";
import Aziz from "../img/contact/aziz_tr.png";
import { motion } from "framer-motion";
// import local transition values
import { transition1 } from "../transitions";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* background */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10 "></motion.div>
          {/* text and form*/}
          <div className="lg:flex-1 lg:pt:32 px-4">
            <h1 className="h1">Contact  <span className="text-accent_secondary">me</span></h1>
            <p className="mb-12"> I would love to get suggestions from you</p>
            {/* Form */}
            <form className=" flex flex-col gap-y-4">
              {/* Input Fields */}
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary  
                 h-[60px] bg-transparent font-secondary w-full
                 pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary  
                 h-[60px] bg-transparent font-secondary w-full
                 pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              {/* Message Field */}
              <input
                className="outline-none border-b border-b-primary  
                 h-[60px] bg-transparent font-secondary w-full
                 pl-3 placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send
              </button>
            </form>
          </div>
          {/* image */}
          <motion.div 
           initial={{ opacity: 0, y: "100%" }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: "100%" }}
           transition={{transition:transition1, duration:1.5}}
           className="lg:flex-1">
            <img src={Aziz} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
