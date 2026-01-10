import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

interface PropsTypes {
  id: string;
}
const MyRecentWorks = ({ id }: PropsTypes) => {
  // Array of work projects with title and description

  const works = [
    {
      title:
        "E-LMIS Examination System – Ministry of Labor and Skills (MoLS), Ethiopia",
      description:
        "Led frontend development of the MoLS E-LMIS Examination System, a national platform enabling 50,000+ students to take standardized digital exams, integrating secure authentication, real-time results, and administrative tools while coordinating backend GraphQL integrations.",
      link: "https://tvet-exam.lmis.gov.et/",
      image: "/images/molos-logo-blue.png", // Replace with the actual image path
    },

    {
      title: "Finden AI (Cloud Data Integration Platform)",
      description:
        "Contributed to the development of Finden AI, a cloud data integration platform, by implementing secure multi-platform integrations, building a unified file browsing experience, enhancing intelligent user profiling, and creating data-driven dashboards.",
      link: "https://www.finden.me/",
      image: "/images/Logo.svg", // Replace with the actual image path
    },

    {
      title: "Enterprise web platform for HST Consulting PLC",
      description:
        "A custom-built website for HST Consulting PLC with dynamic content management, responsive design, and secure authentication.",
      link: "https://hst-et.com/",
      image: "/images/HST Logo.jpg", // Replace with the actual image path
    },
    {
      title: "Pizza Ordering App",
      description:
        "A user-friendly pizza ordering application that allows users to customize their orders and track deliveries in real-time.",
      link: "https://pizza-ordering-service-app-csbo.vercel.app/",
      image: "/images/pizza.png", // Replace with the actual image path
    },
    {
      title: "Office Automation System",
      description:
        "A complete office automation system designed to streamline tasks such as scheduling, asset management, leave requests, and help desk or ticket creation.",
      link: "Source Code Private",
      image: "/images/office-automation.png", // Replace with the actual image path
    },
  ];

  return (
    <div
      className="bg-[#272730] text-white  md:px-24 sm:px-16 px-8 scroll-mt-20 py-14"
      id={`${id}`}
    >
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-11">
        My Latest Works
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-[#1F1F24] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {/* <Image
              src={work.image}
              alt={work.title}
              width={80} // Set appropriate dimensions
              height={60}
              className="rounded-t-lg object-cover"
            /> */}

            <Image
              src={work.image}
              alt={work.title}
              width={
                work.title ===
                "E-LMIS Examination System – Ministry of Labor and Skills (MoLS), Ethiopia"
                  ? 240
                  : 50
              }
              height={
                work.title ===
                "E-LMIS Examination System – Ministry of Labor and Skills (MoLS), Ethiopia"
                  ? 160
                  : 40
              }
              className="rounded-t-lg object-cover"
            />

            <h2 className="text-2xl font-semibold text-gray-300 mt-4">
              {work.title}
            </h2>
            <p className="text-gray-400 mt-2">{work.description}</p>
            <div className="mt-4">
              <div className="flex items-center text-white hover:text-white">
                {!(work.title === "Office Automation System") ? (
                  <Link
                    href={`${work.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center text-blue-500 hover:text-white">
                      Learn More <IoArrowForwardSharp className="ml-2" />
                    </div>
                  </Link>
                ) : (
                  <Link href={"#contact"}>
                    <button className="underline text-blue-600">
                      Source Code is Private Request Access for Demo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecentWorks;
