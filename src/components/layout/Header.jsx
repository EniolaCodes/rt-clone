import React from "react";
import {
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
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
const Header = () => {
  return (
    <div className=" ">
      <header role="banner" className="w-full">
        {/* Logo + Search */}
        <div className="header-content flex justify-between gap-4">
          {/* Logo */}
          <div className="logo">
            <span className="block">Rotten</span>
            <span className="block">Tomatoes</span>
          </div>
          <div className="search-wrapper">
            <label htmlFor="site-search" className="sr-only">
              Search movies, TV shows and more
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search"
              className="search-input"
            />
            <MagnifyingGlassIcon className="magnify-icon" aria-hidden="true" />
          </div>

          {/* Right links */}
          <div className="right-links">
            <div className="top-links">
              <a href="#" className="">
                About Rotten Tomatoes®
              </a>
              <a href="#" className="">
                Critics
              </a>
              <a href="#" className="">
                LOGIN/SIGNUP
              </a>
            </div>
            <nav
              role="navigation"
              aria-label="Utility Navigation"
              className="nav-links"
            >
              <a href="/movies" className="hover:underline">
                Movies
              </a>
              <a href="/tv" className="hover:underline">
                TV Shows
              </a>
              <a href="/news" className="hover:underline">
                RT App
              </a>
              <a href="/news" className="hover:underline">
                News
              </a>
              <a href="/showtimes" className="hover:underline">
                Showtimes
              </a>
            </nav>
          </div>
        </div>
      </header>
      {/* Trending Bar */}
      <div className="trending-bar ">
        <div>
          <h2 className="">Trending on RT</h2>
          <nav
            role="navigation"
            aria-label="Trending Navigation"
            className="trending-links"
          >
            <a href="#" className="">
              Rotten Tomatoes Awards
            </a>
            <a href="#" className="">
              Most Anticipated Movies
            </a>
            <a href="#" className="">
              TV Premier Dates
            </a>
            <a href="#" className="">
              TV Premier Dates
            </a>
            <a href="#" className="">
              The Rotten Tomatoes App
            </a>
          </nav>
        </div>
        {/* Social Links */}
        <div className="social-links">
          {socialPlatforms.map((social) => (
            <SocialLink key={social.platform} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
