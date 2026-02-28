import React from "react";

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#FA3205] focus:text-white focus:px-6 focus:py-3 focus:rounded-md focus:font-bold focus:ring-4 focus:ring-yellow-400 outline-none transition-all"
    >
      Skip to Main Content
    </a>
  );
};

export default SkipToContent;
