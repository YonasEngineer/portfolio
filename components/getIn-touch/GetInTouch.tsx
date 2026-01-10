"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSkype,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface PropsTypes {
  id: string;
}

const GetInTouch = ({ id }: PropsTypes) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error as user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<typeof formData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // mock backend submit
    alert("✅ Message sent successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className="bg-gray-900 text-gray-200 py-16 min-h-screen md:px-24 sm:px-16 px-8"
      id={`${id}`}
    >
      <div className=" mb-12">
        <h1 className="text-4xl font-bold text-purple-500">Get in Touch</h1>
        <p className="text-gray-400 mt-4 max-w-[550px]">
          I&apos;m always excited to take on new projects and collaborate with
          innovative minds. If you have a project in mind or just want to chat
          about design, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            {
              icon: <FaPhoneAlt />,
              label: "Phone Number",
              value: "+251941215837",
            },
            {
              icon: <FaEnvelope />,
              label: "Email",
              value: "yonastsega27@gmail.com",
            },
            { icon: <FaSkype />, label: "Telegram", value: "@yonas29" },
            {
              icon: <FaMapMarkerAlt />,
              label: "Address",
              value: "Addis Ababa, Ethiopia",
            },
          ].map((info, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-800 p-4 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-purple-500 text-3xl mr-4">{info.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{info.label}</p>
                <p className="text-lg font-semibold">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400">Your Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400">
                Email Address *
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="email"
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400">
                Your Phone *
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="phone"
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-400">Subject *</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="I want to contact for..."
                className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message here..."
              className="w-full p-3 mt-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-gray-200 py-3 rounded-md hover:bg-purple-600 transition-colors flex items-center justify-center"
          >
            Send Message
            <span className="ml-2 text-lg">&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
