import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../assets/Data";
import Swal from "sweetalert2";

export default function Women() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const Men = () => navigate("/men");
  const WomenPage = () => navigate("/women");
  const Couple = () => navigate("/couple");

  const filteredItems = Data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Add to Cart Function
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
        <h2 className="text-3xl sm:text-5xl font-extrabold text-pink-200 mb-4 tracking-tight">
          Women’s Premium Collection
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Explore our stylish, comfortable, and feminine fashion pieces — perfect for any occasion.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto animate-fadeIn delay-100">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-600 bg-[#1a1d24] focus:ring-2 focus:ring-pink-400 outline-none text-white placeholder-gray-400"
          />
          <button
            onClick={() => setSearch("")}
            className="w-full sm:w-auto px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-700 animate-slideUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                <p className="text-rose-500 font-bold text-xl mt-3">
                  {item.price}
                </p>
              </div>

              <div className="px-5 pb-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    navigate("/buypro", { state: { product: item } })
                  }
                  className="w-full sm:w-1/2 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold hover:from-rose-600 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
                >
                  View <i className="fa-solid fa-eye"></i>
                </button>

                {/* ✅ Add to Cart Button */}
                <button
                  onClick={() => addToCart(item)}
                  className="w-full sm:w-1/2 py-2 rounded-xl border-2 border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                  
                >
                  Add <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-lg mt-10 animate-fadeIn ">
            product Not Found! "
            <span className="text-pink-400">{search}</span>"
          </p>
        )}
      </div> 

      {/* Footer */}
      <footer className="relative bg-[#0b0e15] text-gray-300 py-16 mt-24 border-t border-gray-800 overflow-hidden">
  {/* Decorative gradient blobs */}
  <div className="absolute -top-10 left-1/3 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
    {/* Brand Info */}
    <div>
      <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">
        Online<span className="text-sky-400">Shop</span>
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
        Step into the world of curated fashion — your style, your identity. Designed with passion and precision.
      </p>
      {/* Social Icons */}
      <div className="flex gap-4 mt-6">
        <a href="#" className="p-2 rounded-full bg-[#1a1f2e] hover:bg-sky-500/20 transition-all duration-300">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="#" className="p-2 rounded-full bg-[#1a1f2e] hover:bg-sky-500/20 transition-all duration-300">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c1.7 1.1 3.9 1.8 6.1 1.8 6.7 0 10.3-5.6 10.3-10.3v-.4c.7-.5 1.3-1.1 1.8-1.8z"/></svg>
        </a>
        <a href="#" className="p-2 rounded-full bg-[#1a1f2e] hover:bg-sky-500/20 transition-all duration-300">
          <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/></svg>
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-3 text-base font-medium">
        <li><button onClick={Men} className="hover:text-sky-400 transition-all duration-200">Men</button></li>
        <li><button onClick={WomenPage} className="hover:text-pink-400 transition-all duration-200">Women</button></li>
        <li><button onClick={Couple} className="hover:text-purple-400 transition-all duration-200">Couple</button></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
      <ul className="space-y-3 text-gray-400 text-base">
        <li className="flex items-center gap-2"><span>📍</span> Phnom Penh, Cambodia</li>
        <li className="flex items-center gap-2"><span>📞</span> +855 123 456 789</li>
        <li className="flex items-center gap-2"><span>✉️</span> info@onlineshop.com</li>
      </ul>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} <span className="text-white font-semibold">Online Shop</span>. All rights reserved.
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