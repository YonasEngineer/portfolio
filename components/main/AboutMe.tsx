"use client";
import React, { useRef } from "react"; // 🔹 ADD useRef
import html2canvas from "html2canvas"; // 🔹 ADD
import jsPDF from "jspdf"; // 🔹 ADD
import { FaHandsClapping } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoArrowForwardSharp } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
interface PropsTypes {
  id: string;
}

const AboutMe = ({ id }: PropsTypes) => {
  // 🔹 ADD: ref for TEST ONLY
  const testRef = useRef<HTMLDivElement | null>(null);

  // 🔹 ADD: test function
  const testHtmlCanvas = async () => {
    if (!testRef.current) return;

    const canvas = await html2canvas(testRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();

    pdf.addImage(
      imgData,
      "PNG",
      40,
      40,
      pageWidth - 80, // width
      120, // height (small test PDF)
    );

    pdf.save("html2canvas-test.pdf");
  };
  return (
    <>
      <div
        className="  relative flex flex-col lg:flex-row items-center justify-between bg-[#1a1a1a]  text-white md:px-24 sm:px-16 px-8"
        id={`${id}`}
      >
        {/* Left Section */}

        {/* Grid Background */}
        <div
          className="absolute inset-0 bg-black bg-[url('/images/gride-new.jpg')] bg-repeat opacity-5"
          style={{
            backgroundSize: "40px 40px", // Adjust the size of the grid squares
            filter: "blur(0.5px)", // Add a blur effect
          }}
        ></div>

        <div className=" relative lg:w-1/2 space-y-6 flex flex-col gap-1    lg:items-start lg:pt-0 pt-20">
          {/* Greeting */}
          <div className="flex items-center space-x-2 ">
            <FaHandsClapping className="text-yellow-400 text-xl" />
            <h5 className="text-lg font-semibold">
              Hello there, I&apos;m Yonas
            </h5>
          </div>

          {/* Title */}
          <h2 className="sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-xl !mt-2">
            <span className="block mb-2">Developing Intuitive</span>
            <span className="text-[#7050F3] ">Digital Experiences</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg !mt-5 te ">
            I assist individuals and brands in achieving their objectives by
            creating and developing user-focused digital products and
            interactive experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col ">
            <div className="flex space-x-4 mt-6">
              <Link
                href="/resume/Yonas-Tsega.pdf"
                download="Yonas-Tsega.pdf"
                className="flex items-center space-x-2"
                target="_blank"
              >
                <button className="flex items-center space-x-2 bg-[#7050F3] sm:px-6 px-2 sm:py-3 py-1 rounded-lg text-white font-medium hover:bg-purple-500">
                  <span>Download Resume</span>
                  <LiaDownloadSolid className="text-xl" />
                </button>
              </Link>
              <Link href={"#contact"}>
                <button className="flex items-center space-x-2 bg-gray-800 sm:px-6 sm:py-3 px-2 py-1 rounded-lg text-white font-medium hover:bg-gray-700">
                  <span>Hire me</span>
                  <IoArrowForwardSharp className="text-xl" />
                </button>
              </Link>
            </div>
            {/* Skills */}
            <div className="space-y-4 my-10">
              <h4 className="text-sm font-medium text-gray-400">
                Over 4 years of professional experience in software development
              </h4>
              <div className="flex space-x-4 text-2xl text-gray-500">
                <SiTypescript className="text-4xl text-purple-500 mb-4" />
                <RiReactjsLine className="text-4xl text-purple-500 mb-4" />
                <RiNextjsFill className="text-4xl text-purple-500 mb-4" />
                <RiNodejsLine className="text-4xl text-purple-500 mb-4" />
                <SiExpress className="text-4xl text-purple-500 mb-4" />
                <FaPython className="text-4xl text-purple-500 mb-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" lg:mt-0 lg:w-1/2 flex items-start relative ">
          <Image
            // src="/images/The Greate Man.jpg"
            // src="/images/The_Greate_Man-removebg-preview.png"
            src="/images/last.png"
            // src="/images/portfolio-removebg-preview.png"
            width={440}
            height={600}
            alt="Yoni The Greate Man"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* ================= HTML2CANVAS TEST (SAFE & SMALL) ================= */}

      {/* Hidden tiny test content */}
      <div
        ref={testRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          padding: "20px",
          background: "#ffffff",
          color: "#000000",
        }}
      >
        <h3>html2canvas production test</h3>
        <p>This confirms html2canvas works in production.</p>
      </div>

      {/* Test button (remove later) */}
      <div className="mt-6 flex justify-end px-8">
        <button
          onClick={testHtmlCanvas}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Test html2canvas
        </button>
      </div>
    </>
  );
};

export default AboutMe;
