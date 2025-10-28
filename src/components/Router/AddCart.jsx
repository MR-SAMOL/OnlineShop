"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function AddCart() {
  const location = useLocation()
  const navigate = useNavigate()
  const [cart, setCart] = useState([])

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(storedCart)
  }, [])

  useEffect(() => {
    const product = location.state?.product
    if (!product) return

    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id)
      let updatedCart
      if (exists) {
        // Product exists - increment quantity
        updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + (product.qty || 1) } : item,
        )
      } else {
        // New product - add to cart
        updatedCart = [
          ...prevCart,
          {
            id: product.id,
            name: product.name || "Unnamed Product",
            price: product.price || "$0.00",
            image: product.image || "/placeholder.png",
            qty: product.qty || 1,
            size: product.size || "M",
          },
        ]
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      return updatedCart
    })

    window.history.replaceState({}, document.title)
  }, [location.state])

  // Update quantity
  const handleAddQty = (id) => {
    const updated = cart.map((item) => (item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item))
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const handleMinusQty = (id) => {
    const updated = cart.map((item) => (item.id === id ? { ...item, qty: Math.max((item.qty || 1) - 1, 1) } : item))
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  // Update size
  const handleSizeChange = (id, newSize) => {
    const updated = cart.map((item) => (item.id === id ? { ...item, size: newSize } : item))
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  // Remove item
 const handleRemove = (id, size) => {
  const updated = cart.filter((item) => !(item.id === id && item.size === size))
  setCart(updated)
  localStorage.setItem("cart", JSON.stringify(updated))

  Swal.fire({
    icon: updated.length === 0 ? "info" : "success",
    title: updated.length === 0 ? "Cart is now empty" : "Item removed",
    showConfirmButton: false,
    timer: 1500,
  })

  window.dispatchEvent(new Event("storage"))
}


  // Checkout
  const handleCheckout = () => {
    setCart([])
    localStorage.removeItem("cart")
    window.dispatchEvent(new Event("storage"))
    navigate("/thank")
  }

  // Calculate total
  const getTotal = () =>
    cart.reduce(
      (sum, item) =>
        sum + Number.parseFloat(item.price ? item.price.toString().replace("$", "") : "0") * (item.qty || 1),
      0,
    )

  return (
    <div className="min-h-screen bg-gradient-to-br  from-slate-50 via-white to-slate-100 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto mb-8 ">
        <div className="flex items-center justify-between mb-2  ">
          <h1 className="text-3xl  top-8 sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Shopping Cart
          </h1>
          {cart.length > 0 && (
            <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </div>
          )}
        </div>
        <p className="text-slate-600 text-sm sm:text-base">Review your items and proceed to checkout</p>
      </div>

      {cart.length > 0 ? (
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => {
                const priceNum = Number.parseFloat(item.price ? item.price.toString().replace("$", "") : "0")
                const totalPrice = (item.qty || 1) * priceNum

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-[60vh] sm:h-40 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        <img
                          src={item.image || "/placeholder.png"}
                          alt={item.name || "Product"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h2 className="font-bold text-lg sm:text-xl text-slate-900 mb-3">
                            {item.name || "Unnamed Product"}
                          </h2>

                          {/* Size & Quantity Controls */}
                          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4">
                            {/* Size Selector */}
                            <div className="flex-shrink-0">
                              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 block">
                                Size
                              </label>
                              <select
                                value={item.size || "M"}
                                onChange={(e) => handleSizeChange(item.id, e.target.value)}
                                className="border-2 border-slate-200 px-4 py-2 rounded-lg font-medium text-slate-900 hover:border-slate-400 focus:border-slate-900 focus:outline-none transition-colors cursor-pointer bg-white"
                              >
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                              </select>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex-shrink-0">
                              <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 block">
                                Quantity
                              </label>
                              <div className="flex items-center border-2 border-slate-200 rounded-lg overflow-hidden bg-white">
                                <button
                                  onClick={() => handleMinusQty(item.id)}
                                  className="px-4 py-2 text-lg font-bold text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                <span className="px-5 py-2 font-bold text-slate-900 min-w-[3rem] text-center bg-slate-50">
                                  {item.qty || 1}
                                </span>
                                <button
                                  onClick={() => handleAddQty(item.id)}
                                  className="px-4 py-2 text-lg font-bold text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Price & Remove */}
                        <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                          <button
                            onClick={() => handleRemove(item.id, item.size)}
                            className="text-slate-500 text-sm font-medium hover:text-red-600 flex items-center gap-2 transition-colors group/btn"
                          >
                            <svg
                              className="w-4 h-4 group-hover/btn:scale-110 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                            Remove
                          </button>
                          <div className="text-right">
                            <p className="text-xs text-slate-500 mb-1">
                              ${priceNum.toFixed(2)} × {item.qty || 1}
                            </p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                              ${totalPrice.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 sticky top-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-700">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-semibold">${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span className="font-medium">Delivery Fee</span>
                    <span className="font-semibold">$1.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t-2 border-slate-200">
                    <span className="text-lg font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ${(getTotal() + 1).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 rounded-xl font-bold text-lg hover:from-slate-800 hover:to-slate-700 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Proceed to Checkout
                </button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg
                      className="w-5 h-5 text-green-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free returns within 30 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto text-center py-16">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Your cart is empty</h2>
            <p className="text-slate-600 mb-8">Add some products to get started with your shopping</p>
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-3 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
