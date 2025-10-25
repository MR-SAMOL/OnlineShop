import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  const Men = () => navigate('/men')
  const WomenPage = () => navigate('/women')
  const Couple = () => navigate('/couple')
  const FitNest = () => navigate('/fitnest')
  const CTUS = () => navigate('/contactus')

  return (
    <div className="bg-gradient-to-b from-[#0d0f15] via-[#141824] to-[#0d0f15] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,0,90,0.2),transparent_60%)]"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide"
        >
          About <span className="text-red-500">KH SHOP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
        >
          Welcome to <span className="text-white font-semibold">KH SHOP</span> — we offer clothing for 
          <span className="text-red-400 font-mono"> Men</span>, 
          <span className="text-pink-400"> Women</span>, and 
          <span className="text-purple-400"> Couples</span>. 
          We provide apparel that makes you feel confident, modern, and stylish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid sm:grid-cols-3 gap-8 mt-12 max-w-5xl w-full"
        >
          {/* Men */}
          <div className="p-6 rounded-2xl bg-[#1a1e2a]/70 backdrop-blur-lg border border-gray-700 hover:border-red-500 transition-all shadow-md hover:shadow-red-500/20">
            <h3 className="text-xl font-semibold text-red-400 mb-2">Men</h3>
            <p className="text-gray-400 text-sm">
              From streetwear to classic styles, explore outfits that boost your confidence and elevate your daily look.
            </p>
          </div>

          {/* Women */}
          <div className="p-6 rounded-2xl bg-[#1a1e2a]/70 backdrop-blur-lg border border-gray-700 hover:border-pink-500 transition-all shadow-md hover:shadow-pink-500/20">
            <h3 className="text-xl font-semibold text-pink-400 mb-2">Women</h3>
            <p className="text-gray-400 text-sm">
              Chic, modern, and popular styles designed to enhance your beauty and personality.
            </p>
          </div>

          {/* Couples */}
          <div className="p-6 rounded-2xl bg-[#1a1e2a]/70 backdrop-blur-lg border border-gray-700 hover:border-purple-500 transition-all shadow-md hover:shadow-purple-500/20">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">Couples</h3>
            <p className="text-gray-400 text-sm">
              Celebrate love with matching outfits that highlight your connection and style.
            </p>
          </div>
        </motion.div>

        <motion.button
  onClick={() => navigate("/contactus")}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="relative z-10 mt-12 px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-medium shadow-lg shadow-red-600/20 cursor-pointer transition-transform duration-300"
>
  Contact Us
</motion.button>
      </section>

      {/* Mission Section */}
     <section className="relative py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-[#0f172a] to-[#10131b] text-center overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-5xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 mb-6">
      ✨ Our Mission
    </h2>

    <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto mb-12">
      At <span className="text-white font-semibold">KH SHOP</span>, our mission is to inspire confidence through comfort and creativity.  
      We believe fashion is more than clothing — it’s a statement of self-expression.  
      Our goal is to deliver high-quality, sustainable, and trend-forward designs that make you feel your best every day.
    </p>

    {/* Mission Value Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {/* Card 1 */}
      <div className="p-6 bg-[#1a1f2e] rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
            alt="Quality Icon"
            className="w-12 h-12"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Quality & Comfort</h3>
        <p className="text-gray-400 text-sm">
          Every KH SHOP product is crafted with precision and care to ensure comfort that lasts all day.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-[#1a1f2e] rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
            alt="Innovation Icon"
            className="w-12 h-12"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
        <p className="text-gray-400 text-sm">
          We constantly push boundaries to bring new designs, materials, and technologies into fashion.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-[#1a1f2e] rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
            alt="Community Icon"
            className="w-12 h-12"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
        <p className="text-gray-400 text-sm">
          We’re building a global community that celebrates confidence, inclusivity, and authentic style.
        </p>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-16">
      <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
        Join Our Journey
      </button>
    </div>
  </div>
</section>


      {/* Footer */}
       <footer className="bg-[#12141b] text-gray-300 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">KH SHOP</h3>
            <p className="text-sm text-gray-400">
              Step into the nest of fashion — where your perfect fit lives.
              Designed for Men, Women, and Couples with love and creativity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-lg font-medium">
              <li><button onClick={Men} className="hover:text-pink-600 transition">Men</button></li>
              <li><button onClick={WomenPage} className="hover:text-pink-600 transition">Women</button></li>
              <li><button onClick={Couple} className="hover:text-pink-600 transition">Couple</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-base text-gray-400">
              📍 Phnom Penh, Cambodia<br />
              📞 +855 123 456 789<br />
              ✉️ info@diamondstores.com
            </p>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">KH SHOP</span> All rights reserved.
        </div>
      </footer>
    </div>
  )
}
