import Aziz from "../img/about/about_1.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { CursorContext } from "../context/CursorContext";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

const STATS = [
  { num: "12+", label: "Years of Experience" },
  { num: "4K+", label: "Photos Captured"     },
  { num: "30+", label: "Species Documented"  },
  { num: "15+", label: "Awards Won"          },
];

const SKILLS = [
  { label: "Wildlife Photography", pct: 97 },
  { label: "Landscape & Nature",   pct: 88 },
  { label: "Post Processing",      pct: 82 },
  { label: "Field Tracking",       pct: 91 },
];

const stagger = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] };

const About = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#080A09] pt-32 pb-24 px-8 md:px-16 xl:px-24 overflow-hidden"
    >
      <Helmet>
        <title>About — Wildlife Photographer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">

        {/* ── TOP SECTION: Image + Bio ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24 mb-28">

          {/* LEFT — Photo with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...stagger, delay: 0.2 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="w-full lg:w-[45%] flex-shrink-0"
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1200}
              scale={1.02}
              transitionSpeed={900}
              glareEnable={true}
              glareMaxOpacity={0.06}
              glareColor="#C9A96E"
              glarePosition="all"
            >
              <div className="relative">
                {/* Corner brackets */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A96E]/50 z-10" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A96E]/50 z-10" />
                {/* Double border frame */}
                <div className="absolute inset-0 border border-[#C9A96E]/15 z-10 pointer-events-none" />
                <div className="absolute inset-[8px] border border-[#C9A96E]/08 z-10 pointer-events-none" />

                <motion.img
                  style={{ y: imgY }}
                  src={Aziz}
                  alt="Aziz — Wildlife Photographer"
                  className="w-full max-h-[580px] object-cover object-top shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
                />

                {/* Floating label badge */}
                <div className="absolute bottom-6 -right-5 bg-[#C9A96E] px-5 py-3 shadow-xl hidden lg:block">
                  <p
                    className="text-[#080A09] text-[9px] tracking-[0.35em] uppercase font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Based in
                  </p>
                  <p
                    className="text-[#080A09] text-sm font-light italic mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...stagger, delay: 0.35 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex-1 flex flex-col"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span
                className="text-[11px] tracking-[0.4em] text-[#C9A96E] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                The Photographer
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] font-light text-[#F0EBE0] tracking-tight mb-7"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              About <em className="italic text-[#C9A96E]">Me</em>
            </h1>

            {/* Bio paragraphs */}
            <p
              className="text-[#F0EBE0]/55 text-sm leading-[1.9] mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I am a <span className="text-[#F0EBE0]/90 font-medium">wildlife photographer</span> who
              loves capturing the beauty and mystery of nature. I strive to create images
              that are both stunning and inspiring — showing the natural world in its rawest,
              most honest form.
            </p>
            <p
              className="text-[#F0EBE0]/40 text-sm leading-[1.9] mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I spend months in the field tracking elusive species across Ethiopia's highlands,
              savannas, and wetlands. Every frame is a collaboration between patience, instinct,
              and the unpredictable beauty of the wild. My work has appeared in national magazines
              and international exhibitions.
            </p>

            {/* Skill bars */}
            <div className="flex flex-col gap-4 mb-10">
              {SKILLS.map(({ label, pct }, i) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <span
                      className="text-[10px] tracking-[0.25em] uppercase text-[#F0EBE0]/40"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-[10px] text-[#C9A96E]/60"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div className="h-px bg-[#F0EBE0]/08 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C9A96E] to-[#E8C88A]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/portfolio"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="group self-start relative text-[11px] tracking-[0.3em] uppercase px-8 py-4 border border-[#C9A96E] text-[#C9A96E] hover:text-[#080A09] transition-all duration-500 overflow-hidden"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span className="relative z-10">Visit My Work</span>
              <div className="absolute inset-0 bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...stagger, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-[#F0EBE0]/06"
        >
          {STATS.map(({ num, label }, i) => (
            <div
              key={label}
              className={`py-10 px-8 flex flex-col gap-2 border-b border-[#F0EBE0]/06 md:border-b-0 ${
                i < 3 ? "md:border-r md:border-[#F0EBE0]/06" : ""
              }`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span
                className="text-[2.8rem] leading-none font-light text-[#C9A96E]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {num}
              </span>
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#F0EBE0]/30"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;