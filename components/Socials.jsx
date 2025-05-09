import Link from "next/link";

import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link
          href="https://www.youtube.com/@samanthatheclair"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </Link>
      </li>

      <li>
        <Link
          href="https://www.instagram.com/samanthatheclair/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
