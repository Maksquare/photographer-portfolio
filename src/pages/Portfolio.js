import Image1 from "../img/portfolio/aziz/1.jpg";
import Image2 from "../img/portfolio/aziz/2.jpg";
import Image3 from "../img/portfolio/aziz/3.jpg";
import Image4 from "../img/portfolio/aziz/4.jpg";
import Image5 from "../img/portfolio/aziz/5.jpg";
import Image6 from "../img/portfolio/aziz/6.jpg";
import Image7 from "../img/portfolio/aziz/7.jpg";
import Image8 from "../img/portfolio/aziz/8.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { CursorContext } from "../context/CursorContext";
import { Helmet } from "react-helmet";

const IMAGES = [
  { src: Image1, id: 1, category: "Wildlife",  title: "In the Wild" },
  { src: Image2, id: 2, category: "Landscape", title: "Open Terrain" },
  { src: Image3, id: 3, category: "Wildlife",  title: "Close Encounter" },
  { src: Image4, id: 4, category: "Portrait",  title: "Eye Contact" },
  { src: Image5, id: 5, category: "Wildlife",  title: "On the Move" },
  { src: Image6, id: 6, category: "Landscape", title: "Golden Hour" },
  { src: Image7, id: 7, category: "Portrait",  title: "Still Moment" },
  { src: Image8, id: 8, category: "Wildlife",  title: "The Hunt" },
];

const CATEGORIES = ["All", "Wildlife", "Landscape", "Portrait"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:   { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

const Portfolio = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // holds image object

  const filtered = activeCategory === "All"
    ? IMAGES
    : IMAGES.filter((img) => img.category === activeCategory);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#080A09] pt-32 pb-20 px-8 md:px-16 xl:px-24"
    >
      <Helmet>
        <title>Portfolio — Wildlife Photographer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ── PAGE HEADER ── */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-10">

          {/* Left — Title block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span
                className="text-[11px] tracking-[0.4em] text-[#C9A96E] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Selected Works
              </span>
            </div>
            <h1
              className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] font-light text-[#F0EBE0] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Port<em className="italic text-[#C9A96E]">folio</em>
            </h1>
            <p
              className="mt-5 text-[#F0EBE0]/40 text-sm leading-relaxed max-w-md"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Over a decade capturing the raw, untamed beauty of African wildlife —
              from the smallest creatures to the most elusive predators.
            </p>
          </motion.div>

          {/* Right — Filter + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-[#C9A96E] text-[#080A09] border-[#C9A96E]"
                      : "bg-transparent text-[#F0EBE0]/40 border-[#F0EBE0]/10 hover:border-[#C9A96E]/40 hover:text-[#C9A96E]"
                  }`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Hire Me */}
            <Link
              to="/contact"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="group relative font-body text-[11px] tracking-[0.3em] uppercase px-8 py-4 border border-[#C9A96E] text-[#C9A96E] hover:text-[#080A09] transition-all duration-500 overflow-hidden"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* ── IMAGE GRID ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                variants={itemVariants}
                layout
                onClick={() => setLightbox(img)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="group relative cursor-pointer overflow-hidden bg-[#0F1410] aspect-[4/3]"
              >
                {/* Photo */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A09]/90 via-[#080A09]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <p
                    className="text-[#C9A96E] text-[9px] tracking-[0.35em] uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {img.category}
                  </p>
                  <p
                    className="text-[#F0EBE0] text-lg font-light italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {img.title}
                  </p>
                </div>

                {/* Corner expand icon */}
                <div className="absolute top-3 right-3 w-7 h-7 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H4M9 1V6" stroke="#C9A96E" strokeWidth="1.2"/>
                  </svg>
                </div>

                {/* Index number */}
                <div
                  className="absolute top-3 left-3 text-[#F0EBE0]/20 text-[10px] tracking-widest group-hover:text-[#C9A96E]/50 transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="w-5 h-px bg-[#C9A96E]/30" />
          <span
            className="text-[10px] tracking-[0.3em] text-[#F0EBE0]/20 uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {filtered.length} of {IMAGES.length} works
          </span>
        </motion.div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#080A09]/95 backdrop-blur-md px-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[#C9A96E]/50 z-10" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t border-r border-[#C9A96E]/50 z-10" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-[#C9A96E]/50 z-10" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[#C9A96E]/50 z-10" />

              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain"
              />

              {/* Caption bar */}
              <div className="flex items-center justify-between mt-4 px-1">
                <div>
                  <p
                    className="text-[#C9A96E] text-[9px] tracking-[0.4em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {lightbox.category}
                  </p>
                  <p
                    className="text-[#F0EBE0] text-xl font-light italic mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {lightbox.title}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-[#F0EBE0]/30 hover:text-[#C9A96E] transition-colors duration-300 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Portfolio;