import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion"; // Import motion for animations
import { Send, Mail, User, MessageSquare } from "lucide-react"; // Import icons

export default function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We'll be in touch shortly! 🚀",
      icon: "success",
      showConfirmButton: false,
      timer: 2500, // Increased timer slightly for better readability
      background: "#1a1f26", // Darker background for the Swal
      color: "#e0e7ff", // Lighter text color
      iconColor: "#818cf8", // Purple-blue for success icon
      toast: true,
      position: "top-end",
      customClass: {
        popup: 'custom-toast-popup' // Custom class for styling the toast
      }
    });

    // Clear form inputs
    setFormData({ name: "", email: "", message: "" });

    // Redirect to home after Swal disappears
    setTimeout(() => navigate("/"), 3000); // Wait a bit longer for Swal to finish
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f15] via-[#141824] to-[#0d0f15] px-4 py-10 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background blobs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-sky-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <motion.div
        className="relative z-10 w-full max-w-lg bg-[#1a1f2a] backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 text-center text-white border border-gray-700/50"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 drop-shadow-md">
          Get in Touch
        </h1>
        <p className="text-gray-300 mb-8 text-base sm:text-lg max-w-md mx-auto font-light">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="text-left space-y-6">
          {/* Name */}
          <motion.div variants={inputVariants}>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-200 flex items-center gap-2">
              <User size={18} className="text-purple-400" /> Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name or company name"
              required
              className="w-full px-5 py-3 rounded-xl bg-[#2a303e] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base shadow-sm transition-all duration-200"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={inputVariants} transition={{ delay: 0.1 }}>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-200 flex items-center gap-2">
              <Mail size={18} className="text-blue-400" /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@example.com"
              required
              className="w-full px-5 py-3 rounded-xl bg-[#2a303e] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm transition-all duration-200"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={inputVariants} transition={{ delay: 0.2 }}>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-200 flex items-center gap-2">
              <MessageSquare size={18} className="text-sky-400" /> Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              required
              rows="5" // Increased rows for more space
              className="w-full px-5 py-3 rounded-xl bg-[#2a303e] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-base shadow-sm transition-all duration-200 resize-y"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-xl hover:scale-102 transform transition-all duration-300 ease-in-out group"
            variants={buttonVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(124, 58, 237, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={20} className="text-white group-hover:-translate-x-0.5 transition-transform" />
            Send Message
          </motion.button>
        </form>

        {/* Footer Info */}
        <p className="text-gray-400 mt-8 text-sm sm:text-base">
          Prefer to send an email directly? Reach us at{" "}
          <a
            href="mailto:info@onlineshop.com"
            className="text-sky-400 font-semibold hover:underline hover:text-sky-300 transition-colors duration-200"
          >
            info@onlineshop.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}