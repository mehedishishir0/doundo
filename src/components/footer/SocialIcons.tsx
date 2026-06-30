"use client";

import Link from "next/link";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
// import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div
      className="flex w-full justify-start items-center  md:justify-start"
      aria-label="Social media links"
    >
      {/* Facebook */}
      {/* <Link
        href="https://facebook.com"
        className="
          group relative flex items-center justify-center
          w-10 h-10 md:w-12 md:h-12 rounded-full
        
          transition-all duration-300 hover:scale-110
        "
        aria-label="Follow us on Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="text-xl md:text-2xl text-white" />
      </Link> */}

      <Link
        href="https://www.linkedin.com/in/doundo-games/"
        className="
          group relative flex items-center justify-center
          w-10 h-10 md:w-12 md:h-12 rounded-full
        hover:to-orange-600
          transition-all duration-300 hover:scale-110 
        "
        aria-label="Follow us on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-xl md:text-2xl" />
      </Link>
      {/* Instagram */}
      <Link
        href="https://www.instagram.com/doundo.official/"
        className="
          group relative flex items-center justify-center
          w-10 h-10 md:w-12 md:h-12 rounded-full
        hover:to-orange-600
          transition-all duration-300 hover:scale-110
        "
        aria-label="Follow us on Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram className="text-xl md:text-2xl text-white" />
      </Link>
      <Link
        href="https://www.tiktok.com/@doundoboardgame"
        className="
          group relative flex items-center justify-center
          w-10 h-10 md:w-12 md:h-12 rounded-full
       
          transition-all duration-300 hover:scale-110
     
        "
        aria-label="Follow us on TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* TikTok */}
        <IoLogoTiktok className="text-xl md:text-2xl text-white" />
      </Link>
      <Link
        href="https://www.youtube.com/@doundo-games"
        className="
          group relative flex items-center justify-center
          w-10 h-10 md:w-12 md:h-12 rounded-full
       
          transition-all duration-300 hover:scale-110
     
        "
        aria-label="Follow us on TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* TikTok */}
        <IoLogoYoutube className="text-xl md:text-2xl text-white" />
      </Link>
    </div>
  );
};

export default SocialIcons;
