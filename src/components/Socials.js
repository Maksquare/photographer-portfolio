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
            <FaFacebook style={{color:'#ed6529'}}/>
          </a>
        </li>
        {/* Import Twitter Icon */}
        <li>
          <a href="https://www.twitter.com" target={"_blank"}>
            <FaTwitter style={{color:'#ed6529'}} />
          </a>
        </li>
        {/* Import Instagram Icon */}
        <li>
          <a href="https://www.instagram.com" target={"_blank"}>
            <FaInstagram style={{color:'#ed6529'}}/>
          </a>
        </li>
        {/* Import telegram Icon */}
        <li>
          <a href="#telegram" target={"_blank"}>
            <FaTelegram style={{color:'#ed6529'}}/>
          </a>
        </li>
        {/* Import pinterest Icon */}
        <li>
          <a href="https://www.pinterest.com" target={"_blank"}>
            <FaPinterest style={{color:'#ed6529'}}/>
          </a>
        </li>
        {/* Import youtube Icon */}
        <li>
          <a href="https://www.youtube.com" target={"_blank"}>
            <FaYoutube style={{color:'#ed6529'}}/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
