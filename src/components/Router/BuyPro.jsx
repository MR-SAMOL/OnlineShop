"use client"

import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function BuyPro() {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state?.product
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("M")

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 text-white px-4">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <p className="text-xl font-medium text-gray-200">No product selected</p>
          <button
            onClick={() => navigate("/women")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-105"
          >
            Browse Products
          </button>
        </div>
      </div>
    )
  }

  const priceNumber = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
  const total = (priceNumber * quantity).toFixed(2)
  const sizes = ["XS", "S", "M", "L", "XL"]

  const handleAddToCart = () => {
  const productToAdd = {
    ...product,
    qty: quantity,
    size: size,
    totalPrice: total,
  }

  const existingCart = JSON.parse(localStorage.getItem("cart")) || []

  // Check if product with same id and size already exists
  const existingIndex = existingCart.findIndex(
    (item) => item.id === product.id && item.size === size
  );

  if (existingIndex >= 0) {
    // If exists, update the quantity and totalPrice
    existingCart[existingIndex].qty += quantity;
    existingCart[existingIndex].totalPrice += total;
  } else {
    // Otherwise, add as a new item
    existingCart.push(productToAdd);
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  window.dispatchEvent(new Event("storage"));

  Swal.fire({
    title: "Added to Cart!",
    text: `${product.name} has been added successfully`,
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
    background: "#1e1f26",
    color: "#fff",
    iconColor: "#ec4899",
    toast: true,
    position: "top-end",
  });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 sm:p-8 lg:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-bold text-lg shadow-lg backdrop-blur-sm">
                    {product.price}
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between text-white">
              <div className="space-y-6">
                {/* Product Title */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Select Size
                  </label>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`min-w-[3rem] px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                          size === s
                            ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/50 scale-105"
                            : "bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-12 h-12 bg-white/5 border border-white/20 text-white rounded-xl flex items-center justify-center text-2xl font-bold hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      −
                    </button>
                    <span className="text-3xl font-bold min-w-[3rem] text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-12 h-12 bg-white/5 border border-white/20 text-white rounded-xl flex items-center justify-center text-2xl font-bold hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Quality Assured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {/* Total Price Display */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-300">Total Amount</span>
                  <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    ${total}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    onClick={() => navigate(-1)}
                    className="py-4 border-2 border-pink-500/50 text-pink-400 font-semibold rounded-xl hover:bg-pink-500/10 hover:border-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Add to Cart</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
