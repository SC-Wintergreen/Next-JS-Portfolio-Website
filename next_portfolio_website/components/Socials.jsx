import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDesktop,
  FaDiscord,
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, path: "/" },
  { icon: <FaLinkedinIn />, path: "/" },
  { icon: <FaTwitter />, path: "/" },
  { icon: <FaDiscord />, path: "/" },
  { icon: <FaDesktop />, path: "/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialIcons.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
