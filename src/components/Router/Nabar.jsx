import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";
import DarkMode from "./DarkMod"; // Correct path to your DarkMode component

export default function Navbar() {
  const navigate = useNavigate();
  const login = () => navigate("/login");
  const AddCart = () => navigate("/addcart");

  const [isOpen, setIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const links = [
    { path: "/women", label: "Women" },
    { path: "/men", label: "Men" },
    { path: "/couple", label: "Couple" },
    { path: "/about", label: "About" },
  ];

  // Load and update cart count from localStorage
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
    <nav 
      // Added dark:bg-gray-800 and dark:text-gray-100 for dark mode
      className="w-full bg-[#1e1f26] text-white shadow-md px-6 sm:px-8 py-3 
                 flex justify-between items-center sticky top-0 z-50
                 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-2xl sm:text-3xl font-bold">
          {/* Changed 'text-white' to a more dynamic text color for dark mode */}
          <span className="text-white dark:text-gray-100">Online</span> 
          <span className="text-sky-400 ml-1">Shop</span>
        </span>
      </NavLink>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center text-lg">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-sky-400 transition-all 
               ${isActive ? "text-sky-400 border-b-2 border-sky-400 pb-1" : ""}
               // Added dark:text-gray-300 for non-active links in dark mode
               ${isActive ? "" : "dark:text-gray-300 dark:hover:text-sky-300"}`
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
        
        {/* Dark Mode Toggle - this component handles its own dark mode styling */}
        {/* <DarkMode />  */}
       

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden text-white dark:text-gray-100 text-2xl ml-2" // Added dark:text-gray-100
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* 📋 Mobile Menu */}
      {isOpen && (
        <div 
          // Added dark:bg-gray-800 for mobile menu in dark mode
          className="absolute top-full left-0 w-full bg-[#1e1f26] text-center md:hidden shadow-lg
                     dark:bg-gray-800 transition-colors duration-300"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              // Added dark:text-gray-200 for mobile links
              className="block py-3 border-b border-gray-700 hover:text-sky-400 
                         transition-colors dark:border-gray-600 dark:text-gray-200 dark:hover:text-sky-300"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}