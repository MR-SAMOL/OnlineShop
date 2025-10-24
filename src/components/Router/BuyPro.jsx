import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function BuyPro() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <p className="text-lg mb-4">⚠️ No product selected.</p>
        <button
          onClick={() => navigate('/women')}
          className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  const priceNumber = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  const total = (priceNumber * quantity).toFixed(2);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // ✅ Add to Cart (Alert Only, No Redirect)
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      qty: quantity,
      size: size,
      totalPrice: total,
    };

    // Save to localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, productToAdd];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update Navbar cart count
    window.dispatchEvent(new Event('storage'));

    // ✅ Show SweetAlert only (no navigation)
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} has been added successfully 🎉`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
      background: '#1e1f26',
      color: '#fff',
      iconColor: '#38bdf8',
      toast: true,
      position: 'top-end',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e0e15] via-[#2a0f22] to-[#000000] flex flex-col items-center justify-center py-10 px-6 relative overflow-hidden">
      {/* Product Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl flex flex-col md:flex-row gap-8">

        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full font-bold shadow-lg">
              {product.price}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {product.name}
            </h1>
            <p className="text-gray-300 text-lg mb-6">{product.description}</p>

            {/* Size Selector */}
            <div className="mb-6">
              <span className="text-lg font-semibold mr-3">Size:</span>
              <div className="flex gap-3 mt-2 flex-wrap">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`cursor-pointer px-4 py-2 rounded-full border font-semibold transition-all duration-200 ${
                      size === s
                        ? 'bg-pink-500 text-white border-pink-500 shadow-md'
                        : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-lg font-semibold">Quantity:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-pink-700 transition-all duration-300 shadow-md"
                >
                  −
                </button>
                <span className="text-2xl font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold hover:bg-pink-700 transition-all duration-300 shadow-md"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Total & Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-2xl font-bold">
              <span>Total:</span>
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                ${total}
              </span>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 py-3 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md"
              >
                Cancel
              </button>

              {/* ✅ Only show alert, don’t redirect */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-[1.03] transition-all duration-300 shadow-md"
              >
                Add <i className="fa-solid fa-cart-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
