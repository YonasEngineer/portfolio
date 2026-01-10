"use client";
import { LuAlignLeft } from "react-icons/lu";
// import { IoLogoFacebook } from "react-icons/io5";
// import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
// import { IoIosSunny } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");
  //     let currentSection = "";
  //     sections.forEach((section) => {
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
  //         currentSection = section.id;
  //       }
  //     });
  //     // setActiveSection(currentSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  console.log("see isMenuOpen", isMenuOpen);
  return (
    <nav className="flex items-center justify-between bg-[#272730] p-4 overflow-hidden w-full sticky top-0 z-[3000]">
      <div>
        <MdDeveloperMode color="white" size={20} className="hidden sm:block" />
        <div onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? (
            <LiaTimesSolid color="white" size={20} className="cursor-pointer" />
          ) : (
            <LuAlignLeft
              color="white"
              size={20}
              className="sm:hidden cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="text-white font-bold ">Yonas.developer</div>
      <div className={` hidden items-center space-x-6 text-white  sm:flex `}>
        <Link href="#services">Services</Link>
        <Link href="#works">Works</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#skills">Skills</Link>
        {/* <Link href="#blog">Blog</Link> */}
        <Link href="#contact">Contact</Link>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } h-svh w-svw text-2xl z-[1000] absolute top-14 left-0 bg-slate-800 p-10 transition-all duration-300 ease-in-ou flex-col  space-y-6 text-white  sm:hidden `}
      >
        {/* <a href="#">About Me</a> */}
        <a href="#">Services</a>
        <a href="#">Works</a>
        <a href="#">Resume</a>
        <a href="#">Skills</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

      {/* Social Icons */}
      <div className=" items-center space-x-4 hidden lg:flex">
        {/* <IoLogoFacebook  color="white" size={20} /> */}
        {/* <FaXTwitter color="white" size={20} /> */}
        <Link
          href={"https://www.linkedin.com/in/yonas-tsega/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialLinkedin color="#6449D4" size={30} />
        </Link>
        <Link
          href={"https://github.com/YonasEngineer"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub color="white" size={20} />
        </Link>
      </div>
      <div>
        {/* <IoIosSunny  color="#F7CC63" size={20}/> */}
        <div className="flex items-center justify-center">
          <Link href={"#contact"}>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:opacity-90 focus:outline-none">
              Hire me!
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
