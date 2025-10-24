import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Show success alert
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

      // Redirect to home page after 2 seconds
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e0e15] via-[#2a0f22] to-[#000000] px-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Log In to FitNest
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-gray-300 text-sm mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="fitnest@gmail.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-[1.03] transition-all duration-300 shadow-lg"
          >
            Log In
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-4"
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-pink-400 hover:text-pink-300 transition"
          >
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
