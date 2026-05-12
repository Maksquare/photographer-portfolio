import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import {
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: FaTwitter,   href: "https://www.twitter.com",   label: "Twitter"   },
  { icon: FaFacebook,  href: "https://www.facebook.com",  label: "Facebook"  },
  { icon: FaTelegram,  href: "#telegram",                  label: "Telegram"  },
  { icon: FaPinterest, href: "https://www.pinterest.com", label: "Pinterest" },
  { icon: FaYoutube,   href: "https://www.youtube.com",   label: "YouTube"   },
];

const Socials = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center"
    >
      <ul className="flex items-center gap-x-4">
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
          <motion.li
            key={label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.07 }}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center w-7 h-7"
            >
              {/* Hover glow ring */}
              <span className="absolute inset-0 rounded-full bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/10 scale-0 group-hover:scale-100 transition-all duration-300" />

              <Icon
                className="relative z-10 text-[#F0EBE0]/30 group-hover:text-[#C9A96E] transition-colors duration-300"
                size={14}
              />
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Divider — shown when inside header next to nav */}
      <div className="ml-4 w-px h-4 bg-[#F0EBE0]/10 hidden xl:block" />
    </div>
  );
};

export default Socials;