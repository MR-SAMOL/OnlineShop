import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shirt, Heart, Users, Star, Lightbulb, Group } from 'lucide-react'; // Import more icons

export default function About() {
  const navigate = useNavigate();
  const Men = () => navigate('/men');
  const WomenPage = () => navigate('/women');
  const Couple = () => navigate('/couple');
  const ContactUs = () => navigate('/contactus'); // Renamed for clarity

  // Animation variants for consistent motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-gradient-to-b from-[#0d0f15] via-[#141824] to-[#0d0f15] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-20 text-center relative overflow-hidden bg-cover bg-center">
        {/* Subtle background pattern/texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        {/* Radial gradient for depth and focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,90,0.15),transparent_70%)] animate-pulse-slow"></div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
        >
          Discover <span className="text-sky-400">Online Shop</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light"
        >
          Your ultimate destination for curated fashion. We empower you to feel confident, modern, and stylish with our exquisite collections for{' '}
          <span className="text-red-400 font-semibold">Men</span>,{' '}
          <span className="text-pink-400 font-semibold">Women</span>, and{' '}
          <span className="text-purple-400 font-semibold">Couples</span>.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-3 gap-8 mt-12 max-w-5xl w-full"
        >
          {/* Category Cards with enhanced design and icons */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
            className="p-8 rounded-2xl bg-[#1a1e2a] border border-gray-700 hover:border-red-500 transition-all duration-300 shadow-xl flex flex-col items-center cursor-pointer"
            onClick={Men}
          >
            <Shirt size={48} className="text-red-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Men's Collection</h3>
            <p className="text-gray-400 text-base leading-relaxed text-center">
              From sharp streetwear to timeless classics, elevate your daily look.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)" }}
            className="p-8 rounded-2xl bg-[#1a1e2a] border border-gray-700 hover:border-pink-500 transition-all duration-300 shadow-xl flex flex-col items-center cursor-pointer"
            onClick={WomenPage}
          >
            <Heart size={48} className="text-pink-400 mb-4" /> {/* Changed icon to be more feminine */}
            <h3 className="text-2xl font-bold text-white mb-2">Women's Styles</h3>
            <p className="text-gray-400 text-base leading-relaxed text-center">
              Chic, modern, and popular designs crafted to enhance your unique beauty.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)" }}
            className="p-8 rounded-2xl bg-[#1a1e2a] border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl flex flex-col items-center cursor-pointer"
            onClick={Couple}
          >
            <Users size={48} className="text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Couples' Outfits</h3>
            <p className="text-gray-400 text-base leading-relaxed text-center">
              Celebrate your bond with coordinating styles that speak volumes.
            </p>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={ContactUs} // Use the specific function
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(239, 68, 68, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 mt-16 px-10 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-lg rounded-full font-semibold shadow-2xl transition-all duration-300 transform-gpu"
        >
          Get in Touch with Us
        </motion.button>
      </section>

      {/* Mission Section */}
      <section className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#0f172a] text-center overflow-hidden">
        {/* Dynamic Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-blob-slow"></div>
          <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-blob-slow animation-delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 mb-8 drop-shadow-md">
            Our Vision & Values ✨
          </h2>

          <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed font-light max-w-4xl mx-auto mb-16">
            At <span className="text-white font-semibold">Online Shop</span>, we are driven by a passion to redefine everyday fashion.
            Our journey is about inspiring <span className="text-sky-300">confidence</span>, fostering <span className="text-pink-300">creativity</span>, and committing to <span className="text-green-300">quality</span> in every stitch.
          </p>

          {/* Mission Value Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {/* Card 1: Quality & Comfort */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -7, boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)" }}
              className="p-8 bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-left"
            >
              <Star size={48} className="text-yellow-400 mb-4" /> {/* Brighter, more relevant icon */}
              <h3 className="text-2xl font-bold text-white mb-3">Unmatched Quality</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Every garment is meticulously crafted with premium materials to ensure lasting comfort and durability.
              </p>
            </motion.div>

            {/* Card 2: Innovation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -7, boxShadow: "0 15px 40px rgba(168, 85, 247, 0.3)" }}
              className="p-8 bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col items-center text-left"
            >
              <Lightbulb size={48} className="text-orange-400 mb-4" /> {/* More distinct icon */}
              <h3 className="text-2xl font-bold text-white mb-3">Trend-Setting Innovation</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                We continuously explore new designs, sustainable fabrics, and smart technologies to keep you ahead.
              </p>
            </motion.div>

            {/* Card 3: Community */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -7, boxShadow: "0 15px 40px rgba(45, 212, 191, 0.3)" }}
              className="p-8 bg-[#1a1f2e] rounded-2xl shadow-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 flex flex-col items-center text-left"
            >
              <Group size={48} className="text-green-400 mb-4" /> {/* Icon change */}
              <h3 className="text-2xl font-bold text-white mb-3">Empowering Community</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                We're building a vibrant global community that celebrates confidence, inclusivity, and authentic self-expression.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
            className="mt-20"
          >
            <button
              onClick={() => navigate('/')} // Example: navigate to home or special offer page
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform-gpu"
            >
              Explore Our Collections
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12141b] text-gray-300 py-12 mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo/Brand */}
          <div className="flex flex-col items-start">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Online<span className="text-sky-400">Shop</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Step into the world of curated fashion – where your perfect fit awaits. Designed with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li><button onClick={Men} className="hover:text-sky-400 transition-colors duration-200">Men</button></li>
              <li><button onClick={WomenPage} className="hover:text-pink-400 transition-colors duration-200">Women</button></li>
              <li><button onClick={Couple} className="hover:text-purple-400 transition-colors duration-200">Couple</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-red-400 transition-colors duration-200">About Us</button></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Customer Care</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li><button onClick={() => navigate('/faq')} className="hover:text-sky-400 transition-colors duration-200">FAQ</button></li>
              <li><button onClick={() => navigate('/shipping')} className="hover:text-sky-400 transition-colors duration-200">Shipping & Returns</button></li>
              <li><button onClick={ContactUs} className="hover:text-sky-400 transition-colors duration-200">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Connect With Us</h3>
            <p className="text-base text-gray-400 space-y-2">
              <span className="flex items-center gap-2">📍</span> Phnom Penh, Cambodia
              <span className="flex items-center gap-2">📞</span> +855 123 456 789
              <span className="flex items-center gap-2">✉️</span> info@onlineshop.com
            </p>
            {/* Social Media Icons (example) */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c1.7 1.1 3.9 1.8 6.1 1.8 6.7 0 10.3-5.6 10.3-10.3v-.4c.7-.5 1.3-1.1 1.8-1.8z"></path></svg></a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 border-t border-gray-700 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Online Shop</span>. All rights reserved.
        </div>
      </footer>
    </div>
  );
}