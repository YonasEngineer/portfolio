"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#232330] text-gray-400 py-10 px-4">
      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* Navigation */}
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-purple-500 text-3xl font-bold">
              {/* <span role="img" aria-label="logo">
                🎵
              </span> */}
            </div>
            <p className="text-gray-300 font-bold text-lg">Yonas.developer</p>
          </div>
          <nav className="flex space-x-6 text-sm flex-wrap">
            {["Services", "Works", "Resume", "Skills", "Blog", "Contact"].map(
              (link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-purple-500 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; 2024 All Rights Reserved by{" "}
          <a href="#" className="text-purple-500 hover:underline">
            Yonas.developer
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        className="fixed bottom-4 right-4 cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="relative flex items-center justify-center w-12 h-12">
          {/* Circular Progress */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
            {/* Background Circle */}
            <path
              className="text-gray-500"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Progress Circle */}
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray={`${scrollProgress}, 100`}
            />
          </svg>

          {/* Arrow Icon */}
          <div className="absolute z-10 text-white">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
