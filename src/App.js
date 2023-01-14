// Import components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

//Import Browser Router

import { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import Framer motion
import { motion } from "framer-motion";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { cursorVariants, cursorBg } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[30px] h-[32px] bg-primary fixed top-0 left-0 
      pointer-events-none  z-50 rounded-full
      
      "
      ></motion.div>
    </>
  );
};

export default App;
