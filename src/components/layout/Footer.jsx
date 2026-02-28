import React from "react";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import SocialLink from "../ui/SocialLink";

const socialPlatforms = [
  {
    href: "https://facebook.com/rottentomatoes",
    platform: "Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://twitter.com/rottentomatoes",
    platform: "Twitter",
    Icon: FaTwitter,
  },
  {
    href: "https://instagram.com/rottentomatoes",
    platform: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://youtube.com/rottentomatoes",
    platform: "YouTube",
    Icon: FaYoutube,
  },
];

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
