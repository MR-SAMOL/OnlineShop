import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Thank you for contacting us!",
      text: "We’ll get back to you soon 💬",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      background: "#1e1f26",
      color: "#fff",
      iconColor: "#38bdf8",
      toast: true,
      position: "top-end",
    });

    // Clear form inputs
    setFormData({ name: "", email: "", message: "" });

    // Redirect to home after 5 seconds
    setTimeout(() => navigate("/"), 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-10 sm:px-6 md:px-8">
      <div className="w-full max-w-lg bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 text-center text-white">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Contact Us
        </h1>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Have questions or feedback? We'd love to hear from you!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="text-left space-y-4 sm:space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1 sm:mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 sm:py-3.5 cursor-pointer bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl font-semibold text-sm sm:text-base shadow hover:scale-105 transform transition-all mt-2"
          >
            Submit
          </button>
        </form>

        {/* Footer Info */}
        <p className="text-gray-400 mt-6 text-xs sm:text-sm md:text-base">
          Or reach us directly at{" "}
          <span className="text-sky-400 font-semibold">
            info@fitnest.com
          </span>
        </p>
      </div>
    </div>
  );
}
