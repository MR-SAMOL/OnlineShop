import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DaTa1 from "../../assets/DaTa1";
import Swal from 'sweetalert2';

export default function Couple() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const Men = () => navigate('/men');
  const WomenPage = () => navigate('/women');
  const CouplePage = () => navigate('/couple');

  const filteredProducts = DaTa1.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const addToCart = (product) => {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    
      // 🔔 Trigger cart update event for Navbar
      window.dispatchEvent(new Event("storage"));
    
      // ✅ Sweet animated alert
      Swal.fire({
        title: "Added to Cart!",
        text: `${product.name} has been added successfully 🎉`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
        background: "#1e1f26",
        color: "#fff",
        iconColor: "#38bdf8",
        toast: true,
        position: "top-end",
      });
    };

  return (
    <section className="min-h-screen bg-[#1e0e15] text-white py-16 px-4 sm:px-6 lg:px-12">

      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 animate-slideUp">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-200 mb-4 tracking-tight">
          💑 Couples Premium Collection
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Discover matching shirts for couples — stylish, comfortable, and perfect together.
        </p>

        {/* Search Bar */}
        <div className="sticky top-4 z-50 bg-[#1e0e15]/95 backdrop-blur-md py-4 flex flex-col sm:flex-row justify-center items-center gap-3 animate-fadeIn shadow-lg rounded-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search couple shirts..."
            className="w-full sm:w-80 md:w-96 px-4 py-2 rounded-xl border border-gray-700 bg-[#2c1f26] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={() => setSearchQuery('')}
            className="w-full sm:w-auto px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-pink-700 animate-slideUp`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-gray-400 text-sm mt-2">{product.description}</p>
                <p className="text-pink-400 font-bold text-xl mt-3">{product.price}</p>
              </div>

              {/* Buttons */}
              <div className="px-5 pb-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/buypro', { state: { product } })}
                  className="w-full sm:w-1/2 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-red-700 text-white font-semibold hover:from-pink-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg"
                >
                  View <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full sm:w-1/2 py-2 rounded-xl border-2 border-pink-600 text-pink-400 font-semibold hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-md"
                >
                  Add <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full text-lg mt-10">
            product Not Found! "<span className="text-pink-400">{searchQuery}</span>"
          </p>
        )}
      </div>

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
              <li><button onClick={Men} className="hover:text-pink-400 transition">Men</button></li>
              <li><button onClick={WomenPage} className="hover:text-pink-400 transition">Women</button></li>
              <li><button onClick={CouplePage} className="hover:text-pink-400 transition">Couple</button></li>
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

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease forwards; }
      `}</style>
    </section>
  );
}
