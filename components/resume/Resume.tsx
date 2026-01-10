import React from "react";
interface PropsTypes {
  id: string;
}

const Resume = ({ id }: PropsTypes) => {
  // Data for Education and Experience
  const educationData = [
    {
      year: "2016-2021",
      course: "BSc. in Electrical and Computer Engineering",
      institution: "Addis Ababa University",
      rating: "3.4/4",
    },
    {
      year: "2022-2023",
      course: "Certification in MERN Stack",
      institution: "Evangadi Network",
      rating: "5.0/5",
    },
    {
      year: "2022-2022",
      course: "Advanced UX/UI Bootcamp",
      institution: "Design Academy",
      rating: "4.9/5",
    },
    {
      year: "2023-2024",
      course: "Certification in AWS",
      institution: "Coursera",
      rating: "4.8/5",
    },
  ];

  const experienceData = [
    {
      year: "2025 – Present",
      role: "Senior Software Developer",
      company: "Ministry of Labor and Skills (MoLS), Ethiopia",
    },

    {
      year: "2024 – 2025",
      role: "Lead Frontend Developer",
      company: "Bekur Technologies",
    },

    {
      year: "2023 - 2024",
      role: "Full Stack Developer",
      company: "HST Tech Startup",
    },

    {
      year: "2021 - 2023",
      role: "Front-end Development",
      company: "West International Holding Limited",
    },
  ];

  return (
    <div
      className="bg-[#212125] text-gray-200 min-h-screen py-16 md:px-24 sm:px-16 px-8"
      id={`${id}`}
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-500">My Resume</h1>
        <p className="text-gray-400 mt-4">
          I believe that working hard and trying to learn every day will make me
          improve in satisfying my customers.
        </p>
      </div>

      {/* Get in touch Button */}
      {/* <div className="flex justify-end ">
        <a
          href="#"
          className="bg-purple-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Get in touch →
        </a>
      </div> */}

      {/* Education & Experience */}
      <div className="flex gap-9 mt-8 justify-center flex-col sm:flex-row items-center sm:items-start">
        {/* Education Section */}
        <div className="bg-[#272730] p-4 rounded-lg max-w-[400px] min-w-[300px] w-full">
          <h2 className="text-xl font-bold text-purple-400 flex items-center space-x-2">
            <span>🎓</span>
            <span>Education</span>
          </h2>
          <div className="mt-4 space-y-3">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="bg-[#272730]  p-5 rounded-md border border-gray-700 text-sm"
              >
                <div className="flex">
                  <div>
                    <h3 className="font-semibold">{item.year}</h3>
                    <p className="mt-1">{item.course}</p>
                    <p className="text-gray-400">{item.institution}</p>
                  </div>
                  <div className="ml-auto mt-6">
                    <p className="text-purple-400 font-bold text-right">
                      {item.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-[#272730] p-4 rounded-lg max-w-[400px] min-w-[300px] w-full">
          <h2 className="text-xl font-bold text-purple-400 flex items-center space-x-2">
            <span>👨‍💻</span>
            <span>Experience</span>
          </h2>
          <div className="mt-4 space-y-3">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="bg-[#272730] p-5 rounded-md border border-gray-700 text-sm"
              >
                <h3 className="font-semibold">{item.year}</h3>
                <p className="mt-1">{item.role}</p>
                <p className="text-gray-400">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
