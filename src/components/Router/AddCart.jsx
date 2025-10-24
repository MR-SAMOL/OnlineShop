import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Add product from location.state
  useEffect(() => {
    const product = location.state?.product;
    if (!product) return;

    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (exists) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + (product.qty || 1) }
            : item
        );
      } else {
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
        ];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    // Clear location.state without navigating
    window.history.replaceState({}, document.title);
  }, [location.state]);

  // Update quantity
  const handleAddQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleMinusQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max((item.qty || 1) - 1, 1) } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Update size
  const handleSizeChange = (id, newSize) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, size: newSize } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove item
  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    Swal.fire({
      icon: updated.length === 0 ? "info" : "success",
      title: updated.length === 0 ? "Cart is now empty 🛒" : "Item removed",
      showConfirmButton: false,
      timer: 1500,
    });

    window.dispatchEvent(new Event("storage"));
  };

  // Checkout
  const handleCheckout = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storage"));
    navigate("/thank");
  };

  // Calculate total
  const getTotal = () =>
    cart.reduce(
      (sum, item) =>
        sum +
        parseFloat(
          (item.price ? item.price.toString().replace("$", "") : "0")
        ) *
          (item.qty || 1),
      0
    );

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        🛒 Your Products
      </h1>

      {cart.length > 0 ? (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item) => {
            const priceNum = parseFloat(
              (item.price ? item.price.toString().replace("$", "") : "0")
            );
            const totalPrice = (item.qty || 1) * priceNum;

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="w-28 h-36 flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.name || "Product"}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 sm:ml-6 w-full mt-4 sm:mt-0">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.name || "Unnamed Product"}
                  </h2>

                  {/* Size & Qty */}
                  <div className="flex items-center gap-6 mb-3 mt-2 flex-wrap">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Size</p>
                      <select
                        value={item.size || "M"}
                        onChange={(e) =>
                          handleSizeChange(item.id, e.target.value)
                        }
                        className="border px-3 py-1 rounded-md"
                      >
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-1">Qty</p>
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => handleMinusQty(item.id)}
                          className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3">{item.qty || 1}</span>
                        <button
                          onClick={() => handleAddQty(item.id)}
                          className="px-3 py-1 text-lg font-bold hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove & Price */}
                  <div className="flex justify-between items-center mt-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-600 text-sm cursor-pointer hover:text-red-500 flex items-center gap-1"
                    >
                      <i className="fa-solid fa-trash"></i> Remove
                    </button>
                    <p className="text-red-600 font-semibold text-lg">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Checkout summary */}
          <div className="border-t pt-4 text-gray-700 text-sm space-y-2 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$1.00</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-semibold">
              <span>Amount to Pay</span>
              <span>${(getTotal() + 1).toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg italic">
          No items in your cart.
        </p>
      )}
    </div>
  );
}
