import Socials from "../components/Socials";
import Logo from "../img/header/aziz_logo.svg";
import MobileNav from "../components/MobileNav";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion, useScroll } from "framer-motion";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  // Hide on scroll down, show on scroll up
  // Using .onChange() which works with older framer-motion versions
  useEffect(() => {
    let prevY = 0;
    const unsubscribe = scrollY.onChange((y) => {
      setScrolled(y > 40);
      if (y > prevY && y > 120) setHidden(true);
      else setHidden(false);
      prevY = y;
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <style>{`
        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #C9A96E;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-link-line:hover::after,
        .nav-link-line.active::after {
          width: 100%;
        }
        .nav-link-line.active {
          color: #C9A96E !important;
        }
      `}</style>

      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080A09]/90 backdrop-blur-md border-b border-[#C9A96E]/10 h-[72px]"
            : "bg-transparent h-[100px] lg:h-[120px]"
        } flex items-center px-8 lg:px-16 xl:px-24`}
      >
        {/* Left — Logo */}
        <Link
          to="/"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="flex-shrink-0 z-10"
        >
          <motion.img
            src={Logo}
            alt="Aziz Logo"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className={`transition-all duration-500 ${scrolled ? "w-[80px]" : "w-[100px]"}`}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Center — Nav */}
        <nav
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="hidden xl:flex items-center gap-10 absolute left-1/2 -translate-x-1/2"
        >
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`nav-link-line relative font-body text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-[#C9A96E] active"
                    : "text-[#F0EBE0]/50 hover:text-[#F0EBE0]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right — Socials + Mobile nav */}
        <div className="ml-auto flex items-center gap-6">
          {/* Hire Me CTA — desktop only */}
          <Link
            to="/contact"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="hidden xl:inline-flex items-center gap-2 font-body text-[10px] tracking-[0.35em] uppercase text-[#080A09] bg-[#C9A96E] hover:bg-[#E8C88A] transition-colors duration-300 px-5 py-2.5 group"
          >
            Hire Me
            <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 inline-block">
              →
            </span>
          </Link>

          {/* Socials */}
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="hidden lg:flex"
          >
            <Socials />
          </div>

          {/* Mobile Menu */}
          <MobileNav />
        </div>

        {/* Gold gradient line that appears at bottom when scrolled */}
        <motion.div
          animate={{ scaleX: scrolled ? 1 : 0, opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent origin-center"
        />
      </motion.header>
    </>
  );
};

export default Header;