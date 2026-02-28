import React from "react";

const SocialLink = ({ href, platform, Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow Rotten Tomatoes on ${platform}`}
      className="group relative inline-flex items-center justify-center rounded-full p-2 
                 text-white transition-colors duration-200 
                 hover:bg-white hover:text-[#ec2d01]
                 focus-visible:outline-none 
                 focus-visible:ring-2 
                 focus-visible:ring-white 
                 focus-visible:ring-offset-2 
                 focus-visible:ring-offset-[#2d2d2d]"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />

      {/* Tooltip */}
      <span
        role="tooltip"
        className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                   rounded bg-black px-2 py-1 text-xs text-white
                   opacity-0 transition-opacity duration-200
                   group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {platform}
      </span>
    </a>
  );
};

export default SocialLink;
