import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Import SweetAlert2
import { FiUser, FiMail, FiLock } from "react-icons/fi"; // Icons for input fields

export default function SignUp() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { // Made handleSubmit async for Swal
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields!",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
        background: "#1e1f26",
        color: "#fff",
        iconColor: "#ef4444", // Red color for error icon
      });
      return;
    }

    // Simulate API call or successful signup
    // In a real app, you'd send formData to your backend here
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    // Show success alert
    Swal.fire({
      title: "Signup Successful!",
      text: `Welcome, ${formData.name} 🎉 Your account has been created!`,
      icon: "success",
      timer: 2500, // Give user a bit more time to read welcome
      showConfirmButton: false,
      toast: true,
      position: "top-end",
      background: "#1e1f26",
      color: "#fff",
      iconColor: "#38bdf8",
    });

    // Redirect to login page after successful signup
    const timer = setTimeout(() => {
        navigate("/login");
    }, 2800); // Redirect slightly after the toast disappears

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#120a17] via-[#1a0b20] to-[#000000] p-4 sm:p-6 font-sans relative overflow-hidden"
    >
      {/* Optional: Add a subtle background pattern or animation - consistent with Login */}
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 z-10"></div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-20 bg-white/5 backdrop-blur-2xl border border-white/10 text-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-sm mx-auto transform hover:shadow-purple-500/30 transition-shadow duration-300"
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 tracking-wide">
          Online shop
        </h2>
        <p className="text-xl text-center text-gray-200 mb-8 font-light">
          Create Your Account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative"
          >
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative"
          >
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="relative"
          >
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-base"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full py-3 mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl text-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-sm text-gray-400 mt-6"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="inline-block px-3 py-1 bg-white/10 rounded-full text-pink-400 hover:text-pink-300 hover:bg-white/20 transition-all duration-200"
          >
            Log in
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}