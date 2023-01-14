import { useContext } from "react";

// Import cursor context
import { CursorContext } from "../context/CursorContext";
// Import social media icons
import {
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaFacebook
} from "react-icons/fa";
const Socials = () => {
  const { onMouseLeave, onMouseEnter } = useContext(CursorContext)

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        {/* Import Facebook Icon */}
        <li>
          <a href="https://www.facebook.com" target={"_blank"}>
            <FaFacebook />
          </a>
        </li>
        {/* Import Twitter Icon */}
        <li>
          <a href="https://www.twitter.com" target={"_blank"}>
            <FaTwitter />
          </a>
        </li>
        {/* Import Instagram Icon */}
        <li>
          <a href="https://www.instagram.com" target={"_blank"}>
            <FaInstagram />
          </a>
        </li>
        {/* Import telegram Icon */}
        <li>
          <a href="#telegram" target={"_blank"}>
            <FaTelegram />
          </a>
        </li>
        {/* Import pinterest Icon */}
        <li>
          <a href="https://www.pinterest.com" target={"_blank"}>
            <FaPinterest />
          </a>
        </li>
        {/* Import youtube Icon */}
        <li>
          <a href="https://www.youtube.com" target={"_blank"}>
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
