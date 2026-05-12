import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "/", label: "Home", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/portfolio", label: "Portfolio", num: "03" },
  { to: "/contact", label: "Contact", num: "04" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.4 } },
  exit:   { opacity: 0, transition: { duration: 0.35, delay: 0.15 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  show:   { x: 0, transition: { duration: 0.55, ease: [0.6, 0.01, -0.05, 0.9] } },
  exit:   { x: "100%", transition: { duration: 0.45, ease: [0.6, 0.01, -0.05, 0.9] } },
};

const listVariants = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { x: 40, opacity: 0 },
  show:   { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   { x: 40, opacity: 0, transition: { duration: 0.3 } },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const close = () => setOpenMenu(false);

  return (
    <nav className="xl:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpenMenu(true)}
        aria-label="Open menu"
        className="text-[#F0EBE0]/70 hover:text-[#C9A96E] transition-colors duration-300 cursor-pointer text-2xl flex items-center"
      >
        <CgMenuRight />
      </button>

      <AnimatePresence>
        {openMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={close}
              className="fixed inset-0 bg-[#080A09]/70 backdrop-blur-sm z-40"
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-[80vw] max-w-[340px] z-50 flex flex-col"
              style={{ background: "linear-gradient(135deg, #0F1410 0%, #080A09 100%)" }}
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-[#C9A96E]/30" />
              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[#C9A96E]/30" />
              <div className="absolute bottom-5 left-5 w-6 h-6 border-b border-l border-[#C9A96E]/30" />
              <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-[#C9A96E]/30" />

              {/* Close button */}
              <div className="flex justify-end px-6 pt-8 pb-4">
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="text-[#F0EBE0]/40 hover:text-[#C9A96E] transition-colors duration-300 text-2xl cursor-pointer"
                >
                  <IoMdClose />
                </button>
              </div>

              {/* Eyebrow label */}
              <div className="px-10 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-px bg-[#C9A96E]/50" />
                  <span
                    className="text-[9px] tracking-[0.4em] text-[#C9A96E]/50 uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Navigation
                  </span>
                </div>
              </div>

              {/* Nav links */}
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col px-10 gap-y-1 flex-1"
              >
                {NAV_LINKS.map(({ to, label, num }) => {
                  const isActive = location.pathname === to;
                  return (
                    <motion.li key={to} variants={itemVariants}>
                      <Link
                        to={to}
                        onClick={close}
                        className="group flex items-center gap-5 py-4 border-b border-[#F0EBE0]/5 hover:border-[#C9A96E]/20 transition-colors duration-300"
                      >
                        <span
                          className="text-[10px] tracking-widest text-[#C9A96E]/30 group-hover:text-[#C9A96E]/60 transition-colors duration-300 mt-0.5"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {num}
                        </span>
                        <span
                          className={`text-3xl font-light tracking-tight transition-colors duration-300 ${
                            isActive
                              ? "text-[#C9A96E]"
                              : "text-[#F0EBE0]/70 group-hover:text-[#F0EBE0]"
                          }`}
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {isActive ? <em>{label}</em> : label}
                        </span>
                        <span className="ml-auto text-[#C9A96E]/0 group-hover:text-[#C9A96E]/60 transition-all duration-300 text-sm">
                          →
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Bottom — Hire Me CTA */}
              <div className="px-10 pb-14 pt-8">
                <Link
                  to="/contact"
                  onClick={close}
                  className="block w-full text-center font-body text-[10px] tracking-[0.35em] uppercase text-[#080A09] bg-[#C9A96E] hover:bg-[#E8C88A] transition-colors duration-300 py-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;