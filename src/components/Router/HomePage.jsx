import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hdata from "../../assets/Hdata";
import Swal from "sweetalert2";

export default function HomePage() {
  const navigate = useNavigate();

  const goTo = (path) => navigate(path);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const found = existingCart.find((p) => p.id === product.id);

    if (found) {
      Swal.fire({
        title: "Already in Cart!",
        text: `${product.name} is already in your cart.`,
        icon: "info",
        showConfirmButton: false,
        timer: 1200,
        background: "#1e1f26",
        color: "#fff",
        toast: true,
        position: "top-end",
      });
      return;
    }

    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));

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

  const images = [
    "https://i.pinimg.com/1200x/49/14/07/491407f741f2469c110d29c7b49bd237.jpg",
    "https://i.pinimg.com/1200x/95/f9/16/95f916f0e120311e8c76893a412e3077.jpg",
    "https://i.pinimg.com/1200x/63/18/52/631852579205e97cafc24c08bef74dac.jpg",
  ];

  const [current, setCurrent] = useState(0);
   const Men = () => navigate('/men');
  const WomenPage = () => navigate('/women');
  const CouplePage = () => navigate('/couple');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const categories = [
    {
      title: "Men",
      image:
        "https://i.pinimg.com/1200x/e7/0b/d3/e70bd3544d70ec0da25bd4999b882e5c.jpg",
      action: () => goTo("/men"),
    },
    {
      title: "Women",
      image:
        "https://i.pinimg.com/1200x/de/04/34/de04340581fe25e0a68aeee4868ee978.jpg",
      action: () => goTo("/women"),
    },
    {
      title: "Couples",
      image:
        "https://i.pinimg.com/1200x/bc/e5/34/bce534c81d0f2aeb242936358f62048a.jpg",
      action: () => goTo("/couple"),
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[50vh] md:h-[35vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 space-y-4 animate-slideUp">
        </div>
      </section>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
            <button
              onClick={() => goTo("/men")}
              className="bg-sky-500 hover:bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Men
            </button>
            <button
              onClick={() => goTo("/women")}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-6 md:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Women
            </button>
            <button
              onClick={() => goTo("/couple")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 md:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Couples
            </button>
          </div>

      {/* 🛍 Featured Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {Hdata.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-100 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-semibold">{product.name}</h3>
                <p className="text-sky-600 font-bold mt-1">{product.price}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => navigate("/buypro", { state: { product } })}
                    className="border border-sky-500 text-sky-600 px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-sky-500 hover:text-white transition-all duration-300"
                  >
                    View
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-sky-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300 flex items-center gap-1"
                  >
                    <i className="fa-solid fa-cart-plus"></i> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧥 Categories Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
    <h2 className="  text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-gray-800 tracking-tight">
      Shop by <span className="text-sky-500 font">Category</span>
    </h2>

    {/* Centered Grid */}
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 mx-auto"
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="w-64 sm:w-72 md:w-80 h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500"></div>

          {/* Text & Button */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">{cat.title}</h3>
            <button
              onClick={cat.action}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* ⚙️ Footer */}
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
        <li><button onClick={CouplePage} className="hover:text-purple-400 transition-all duration-200">Couple</button></li>
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

      <style>
        {`
          @keyframes slideFadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp { animation: slideFadeUp 1s ease forwards; }
        `}
      </style>
    </div>
  );
}