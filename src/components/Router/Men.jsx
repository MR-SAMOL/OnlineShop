import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import datas from "../../assets/datas";
import Swal from 'sweetalert2';

export default function Men() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const WomenPage = () => navigate('/women');
  const MenPage = () => navigate('/men');
  const Couple = () => navigate('/couple');

  const filteredProducts = datas.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
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
    <section className="min-h-screen bg-[#0e1015] text-white py-16 px-4 sm:px-6 lg:px-12">

      {/* Header */}
      <div className="text-center mb-10 animate-slideUp">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-300 mb-4 tracking-tight">
          Men’s Premium Collection
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Explore our stylish, comfortable, and masculine fashion pieces — perfect for any occasion.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto animate-fadeIn delay-100">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-[#1a1d24] focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-gray-400"
          />
          <button
            onClick={() => setSearch('')}
            className="w-full sm:w-auto px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-700 animate-slideUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{product.description}</p>
                <p className="text-blue-400 font-bold text-xl mt-3">{product.price}</p>
              </div>
              <div className="px-5 pb-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/buypro', { state: { product } })}
                  className="w-full sm:w-1/2 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  View <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full sm:w-1/2 py-2 rounded-xl border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                >
                  Add <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-lg mt-10 animate-fadeIn">
            product Not Found! "<span className="text-blue-400">{search}</span>"
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
              <li><button onClick={MenPage} className="hover:text-blue-400 transition">Men</button></li>
              <li><button onClick={WomenPage} className="hover:text-blue-400 transition">Women</button></li>
              <li><button onClick={Couple} className="hover:text-blue-400 transition">Couple</button></li>
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
        @keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
        @keyframes slideUp { from {opacity: 0; transform: translateY(20px);} to {opacity: 1; transform: translateY(0);} }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease forwards; }
      `}</style>
    </section>
  );
}
