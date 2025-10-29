import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
// You might need an icon library, e.g., react-icons
import { FiMail, FiLock } from "react-icons/fi"; // Example using react-icons

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome back to your FitNest account 🎉",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
        background: "#1e1f26",
        color: "#fff",
        iconColor: "#38bdf8",
      });

      const timer = setTimeout(() => {
        navigate("/fitnest");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#120a17] via-[#1a0b20] to-[#000000] p-4 sm:p-6 font-sans relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 z-10"></div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-20 bg-white/5 backdrop-blur-2xl border border-white/10 text-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-sm mx-auto transform hover:shadow-purple-500/30 transition-shadow duration-300"
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 tracking-wide">
          Online Shop
        </h2>
        <p className="text-xl text-center text-gray-200 mb-8 font-light">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative"
          >
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Email Address"
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
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-base"
              required
            />
            <Link
              to="/forgot-password"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-pink-400 transition"
            >
              Forgot?
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)" }} // Glow effect
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full py-3 mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl text-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
          >
            Log In
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-sm text-gray-400 mt-6"
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="inline-block px-3 py-1 bg-white/10 rounded-full text-pink-400 hover:text-pink-300 hover:bg-white/20 transition-all duration-200"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}