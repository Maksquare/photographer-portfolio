// Import Image asset
import WomanImg from "../img/home/woman.png";
import BgImg from "../img/home/home_1.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useContext, useRef, useEffect, useState } from "react";
import { CursorContext } from "../context/CursorContext";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

const Home = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);
  const containerRef = useRef(null);


  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);

  // Mouse-driven parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const imgParallaxX = useTransform(smoothX, [-1, 1], ["-18px", "18px"]);
  const imgParallaxY = useTransform(smoothY, [-1, 1], ["-12px", "12px"]);
  const textParallaxX = useTransform(smoothX, [-1, 1], ["8px", "-8px"]);


  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const transition1 = { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] };
  const stagger = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] };

  // Floating particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen overflow-hidden bg-[#080A09]"
    >
      <Helmet>
        <title>Wildlife Photographer — Addis Ababa</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --gold: #C9A96E;
            --gold-light: #E8C88A;
            --teal: #3ECFCF;
            --dark: #080A09;
            --dark-mid: #0F1410;
            --cream: #F0EBE0;
          }

          /* Custom cursor */
          body { cursor: none; }
          .custom-cursor {
            width: 12px; height: 12px;
            background: var(--gold);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.15s ease;
          }

          /* Grain overlay */
          .grain::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 20;
            opacity: 0.4;
          }

          /* Typography */
          .font-display { font-family: 'Cormorant Garamond', serif; }
          .font-body { font-family: 'DM Sans', sans-serif; }

          /* Gold shimmer */
          @keyframes shimmer {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .shimmer { animation: shimmer 3s ease-in-out infinite; }

          /* Floating particles */
          @keyframes float-up {
            0% { transform: translateY(0px) translateX(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 0.6; }
            100% { transform: translateY(-120px) translateX(20px); opacity: 0; }
          }

          /* Diagonal line decoration */
          .diagonal-line {
            position: absolute;
            width: 1px;
            background: linear-gradient(to bottom, transparent, var(--gold), transparent);
            opacity: 0.3;
          }

          /* Button glow */
          .btn-glow {
            position: relative;
            overflow: hidden;
          }
          .btn-glow::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, transparent 30%, rgba(201,169,110,0.15) 50%, transparent 70%);
            transform: translateX(-100%);
            transition: transform 0.6s ease;
          }
          .btn-glow:hover::before { transform: translateX(100%); }

          /* Scroll indicator */
          @keyframes scroll-bounce {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.4; }
          }
          .scroll-bounce { animation: scroll-bounce 2s ease-in-out infinite; }

          /* Image vignette */
          .photo-vignette::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at center, transparent 40%, rgba(8,10,9,0.7) 100%);
            pointer-events: none;
          }
        `}</style>
      </Helmet>

      {/* ── BACKGROUND IMAGE with parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[7.5%]"
      >
        <motion.img
          src={BgImg}
          alt="Wildlife"
          style={{ x: imgParallaxX, y: imgParallaxY }}
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* ── GRADIENT OVERLAYS ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-[#080A09] via-[#080A09]/70 to-transparent z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-[#080A09]/30 z-10" />

      {/* ── GRAIN ── */}
      <div className="grain absolute inset-0 z-20 pointer-events-none" />

      {/* ── FLOATING PARTICLES ── */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#C9A96E]"
            style={{
              left: `${p.x}%`,
              bottom: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float-up ${p.duration}s ${p.delay}s ease-in-out infinite`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* ── DIAGONAL DECORATIVE LINES ── */}
      <div className="diagonal-line h-48 top-24 left-[42%] z-20" />
      <div className="diagonal-line h-32 bottom-32 right-[22%] z-20" />

      {/* ── CORNER BRACKETS ── */}
      <div className="absolute top-8 left-8 z-30 w-12 h-12 border-t border-l border-[#C9A96E]/40" />
      <div className="absolute top-8 right-8 z-30 w-12 h-12 border-t border-r border-[#C9A96E]/40" />
      <div className="absolute bottom-8 left-8 z-30 w-12 h-12 border-b border-l border-[#C9A96E]/40" />
      <div className="absolute bottom-8 right-8 z-30 w-12 h-12 border-b border-r border-[#C9A96E]/40" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-30 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">

        {/* Side label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...stagger, delay: 1.8 }}
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#C9A96E]/60" />
          <span
            className="font-body text-[10px] tracking-[0.35em] text-[#C9A96E]/70 uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Portfolio 2024
          </span>
          <div className="w-px h-16 bg-gradient-to-t from-transparent to-[#C9A96E]/60" />
        </motion.div>

        {/* ── HERO TEXT ── */}
        <motion.div
          style={{ y: textY, x: textParallaxX }}
          className="max-w-3xl"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...stagger, delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span className="font-body text-[11px] tracking-[0.4em] text-[#C9A96E] uppercase shimmer">
              Addis Ababa, Ethiopia
            </span>
          </motion.div>

          {/* H1 — split lines */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...stagger, delay: 0.5 }}
              className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.88] font-light text-[#F0EBE0] tracking-tight"
            >
              Wild
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...stagger, delay: 0.65 }}
              className="font-display text-[clamp(4rem,10vw,9rem)] leading-[0.88] font-light italic text-[#C9A96E] tracking-tight"
            >
              Life
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ...stagger, delay: 0.8 }}
              className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] font-light text-[#F0EBE0]/60 tracking-[0.15em] uppercase"
            >
              Photographer
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...stagger, delay: 1.1 }}
            className="font-body text-[#F0EBE0]/50 text-sm md:text-base tracking-wide leading-relaxed max-w-xs mb-10"
          >
            Capturing the raw, untamed beauty of Africa's wilderness — one frame at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...stagger, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              to="/portfolio"
              className="btn-glow group relative font-body text-[11px] tracking-[0.3em] uppercase px-8 py-4 border border-[#C9A96E] text-[#C9A96E] hover:text-[#080A09] transition-all duration-500 overflow-hidden"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </Link>

            <Link
              to="/contact"
              className="group font-body text-[11px] tracking-[0.3em] uppercase text-[#F0EBE0]/50 hover:text-[#C9A96E] transition-colors duration-300 flex items-center gap-3"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <span className="w-0 group-hover:w-6 h-px bg-[#C9A96E] transition-all duration-300 origin-left" />
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* ── FLOATING PHOTO CARD (3D Tilt) ── */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ ...transition1, delay: 0.6 }}
          className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#C9A96E"
            glarePosition="all"
            className="w-[320px] xl:w-[380px]"
          >
            <div className="photo-vignette relative rounded-none overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
              {/* Gold frame border */}
              <div className="absolute inset-0 border border-[#C9A96E]/20 z-10 pointer-events-none" />
              <div className="absolute inset-[6px] border border-[#C9A96E]/10 z-10 pointer-events-none" />

              <img
                src={WomanImg}
                alt="Wildlife Photography"
                className="w-full h-[460px] xl:h-[540px] object-cover"
              />

              {/* Card bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#080A09] to-transparent z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display italic text-[#C9A96E] text-sm">Featured Work</p>
                    <p className="font-body text-[#F0EBE0]/40 text-[10px] tracking-widest uppercase mt-0.5">Ethiopian Wildlife</p>
                  </div>
                  <div className="w-8 h-8 border border-[#C9A96E]/40 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="#C9A96E" strokeWidth="1.2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...stagger, delay: 1.6 }}
          className="absolute bottom-12 left-8 md:left-16 lg:left-24 xl:left-32 flex items-center gap-10"
        >
          {[
            { num: "12+", label: "Years" },
            { num: "4K+", label: "Photos" },
            { num: "30+", label: "Species" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display text-2xl text-[#C9A96E] leading-none">{stat.num}</span>
              <span className="font-body text-[10px] tracking-[0.3em] text-[#F0EBE0]/30 uppercase mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 right-8 md:right-16 lg:right-24 xl:right-32 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.4em] text-[#F0EBE0]/30 uppercase">Scroll</span>
          <div className="scroll-bounce w-px h-10 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Home;
