import Aziz from "../img/contact/aziz_tr.png";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import { Helmet } from "react-helmet";
import Tilt from "react-parallax-tilt";

const stagger = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] };

const CONTACT_INFO = [
  {
    label: "Email",
    value: "aziz@wildlife.com",
    href: "mailto:aziz@wildlife.com",
  },
  {
    label: "Phone",
    value: "+251 91 234 5678",
    href: "tel:+251912345678",
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
  },
];

const Contact = () => {
  const { onMouseEnter, onMouseLeave } = useContext(CursorContext);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);


  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up your real form handler here (EmailJS, Formspree, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#080A09] pt-32 pb-24 px-8 md:px-16 xl:px-24 overflow-hidden"
    >
      <Helmet>
        <title>Contact — Wildlife Photographer</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .field-line {
            position: relative;
          }
          .field-line::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background: #C9A96E;
            transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .field-line.focused::after,
          .field-line:focus-within::after {
            width: 100%;
          }
        `}</style>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

          {/* ── LEFT COLUMN: Heading + Form + Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...stagger, delay: 0.2 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex-1 w-full"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <span
                className="text-[11px] tracking-[0.4em] text-[#C9A96E] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] font-light text-[#F0EBE0] tracking-tight mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Let's <em className="italic text-[#C9A96E]">Work</em>
              <br />Together
            </h1>
            <p
              className="text-[#F0EBE0]/35 text-sm leading-relaxed mb-12 max-w-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Whether you need images for a publication, a campaign, or a personal project —
              I'd love to hear from you.
            </p>

            {/* ── FORM ── */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-14">
              {/* Name + Email row */}
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Name */}
                <div className="field-line flex-1 border-b border-[#F0EBE0]/10 pb-3">
                  <label
                    className="block text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/60 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Aziz Mohammed"
                    className="w-full bg-transparent outline-none text-[#F0EBE0]/80 text-sm placeholder:text-[#F0EBE0]/15"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Email */}
                <div className="field-line flex-1 border-b border-[#F0EBE0]/10 pb-3">
                  <label
                    className="block text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/60 mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="hello@email.com"
                    className="w-full bg-transparent outline-none text-[#F0EBE0]/80 text-sm placeholder:text-[#F0EBE0]/15"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="field-line border-b border-[#F0EBE0]/10 pb-3">
                <label
                  className="block text-[9px] tracking-[0.35em] uppercase text-[#C9A96E]/60 mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent outline-none text-[#F0EBE0]/80 text-sm placeholder:text-[#F0EBE0]/15 resize-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              {/* Submit */}
              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="group relative text-[11px] tracking-[0.3em] uppercase px-10 py-4 border border-[#C9A96E] text-[#C9A96E] hover:text-[#080A09] transition-all duration-500 overflow-hidden self-start"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="relative z-10">
                    {sent ? "Sent ✓" : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-[#C9A96E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </button>

                {sent && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[#C9A96E]/70 text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Message received — I'll be in touch soon.
                  </motion.span>
                )}
              </div>
            </form>

            {/* ── CONTACT INFO ── */}
            <div className="flex flex-col gap-5 border-t border-[#F0EBE0]/06 pt-10">
              {CONTACT_INFO.map(({ label, value, href }) => (
                <div key={label} className="flex items-center gap-6">
                  <span
                    className="text-[9px] tracking-[0.35em] uppercase text-[#F0EBE0]/20 w-16 flex-shrink-0"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {label}
                  </span>
                  <div className="w-px h-3 bg-[#C9A96E]/20" />
                  {href ? (
                    <a
                      href={href}
                      className="text-[#F0EBE0]/55 text-sm hover:text-[#C9A96E] transition-colors duration-300"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      className="text-[#F0EBE0]/55 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...stagger, delay: 0.4 }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="hidden lg:flex lg:w-[42%] flex-shrink-0 items-start pt-4"
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1400}
              scale={1.02}
              transitionSpeed={900}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glareColor="#C9A96E"
              glarePosition="all"
              className="w-full"
            >
              <div className="relative">
                {/* Corner brackets */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#C9A96E]/40 z-10" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#C9A96E]/40 z-10" />
                <div className="absolute inset-0 border border-[#C9A96E]/10 z-10 pointer-events-none" />

                <img
                  src={Aziz}
                  alt="Aziz — Wildlife Photographer"
                  className="w-full object-cover shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
                />

                {/* Availability badge */}
                <div className="absolute top-6 -left-5 bg-[#0F1410] border border-[#C9A96E]/20 px-5 py-3 shadow-xl hidden xl:block">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
                    <p
                      className="text-[#C9A96E] text-[9px] tracking-[0.35em] uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Available for work
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
