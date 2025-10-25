import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const login = () => navigate("/login");
  const AddCart = () => navigate("/addcart");

  const [isOpen, setIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0); // ✅ add state

  const links = [
    { path: "/women", label: "Women" },
    { path: "/men", label: "Men" },
    { path: "/couple", label: "Couple" },
    { path: "/about", label: "About" },
  ];

  
 

  // ✅ Load and update cart count from localStorage
  useEffect(() => {
    const loadCartCount = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(storedCart.length);
    };

    loadCartCount();

    // Listen for cart updates from other tabs/pages
    window.addEventListener("storage", loadCartCount);

    return () => {
      window.removeEventListener("storage", loadCartCount);

    };
  }, []);

  return (
    <nav className="w-full bg-[#1e1f26] text-white shadow-md px-6 sm:px-8 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        {/* <img
          src="/src/assets/fs.png"
          alt="FitNest Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        /> */}
        <span className="text-2xl sm:text-3xl font-bold">
          <span className="text-white">KH</span>
          <span className="text-sky-400 ml-1">SHOP</span>
        </span>
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center text-lg">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-sky-400 transition-all ${
                isActive ? "text-sky-400 border-b-2 border-sky-400 pb-1" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        {/* 🛒 Shopping Cart with conditional alert */}
        <button
          onClick={AddCart}
          className="relative hover:text-sky-400 cursor-pointer"
        >
          <ShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-bounce">
              {cartCount}
            </span>
          )}
        </button>

        {/* 👤 User Icon */}
        <button onClick={login} className="hover:text-sky-400 cursor-pointer">
          <User size={22} />
        </button>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* 📋 Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1e1f26] text-center md:hidden shadow-lg">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-3 border-b border-gray-700 hover:text-sky-400 transition-colors"
            >
              {link.label}
            </NavLink>
          ))}

          
        </div>
      )}
    </nav>
  );
}
