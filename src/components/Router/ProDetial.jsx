import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProDetial = () => {
  const { id } = useParams()
  const [message, setMessage] = useState('')

  const products = [
    { id: 1, 
      name: 'Diamond Ring',
       price: '$25.00',
        image: 'https://i.pinimg.com/736x/d4/95/da/d495da27ddfca8ae59c621b434857617.jpg',
         description: 'A beautiful handcrafted diamond ring made with 24K gold.' },
    { id: 2, 
      name: 'Silver Necklace', 
      price: '$29.99', 
      image: 'https://i.pinimg.com/736x/1f/6d/66/1f6d66ebb2b7b6236e67cf5037890c5c.jpg',
       description: 'A stylish and shiny necklace, perfect for every occasion.' },
    { id: 3,
       name: 'Gold Earrings',
        price: '$19.99', 
        image: 'https://i.pinimg.com/1200x/86/9b/84/869b849412d7f7bbb8d93be9d72fea15.jpg',
         description: 'Elegant earrings crafted from fine gold.' },
   { id: 4,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/61/89/84/6189849d167adcc3b78e661ec747ea43.jpg',
      description: 'Premium quality earrings for special occasions.'
   },
    { id: 5,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/71/09/68/710968389609e90b94acbd974953b0b4.jpg',
      description: 'Premium quality earrings for special occasions.' },
    { id: 6,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/7b/5a/14/7b5a141f025ece475f68229a6495f752.jpg',
      description: 'Premium quality earrings for special occasions.' }
  ]

  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return <h2 className="text-center text-red-600 mt-20 text-2xl font-semibold">❌ Product Not Found</h2>
  }

  const handleBuyNow = () => {
    setMessage(`💰 You bought "${product.name}" successfully!`)
    setTimeout(() => setMessage(''), 3000)
  }

  const handleAddToCart = () => {
    setMessage(`🛒 "${product.name}" added to cart successfully!`)
    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-300 to-black flex justify-center items-center py-8 px-4 sm:px-6 lg:px-12">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden transform transition hover:scale-[1.02]">
        
        {/* Image Section */}
        <div className="md:w-1/2 relative h-80 sm:h-96 md:h-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {product.price}
          </span>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-lg sm:text-xl">⭐️⭐️⭐️⭐️⭐️</span>
              <span className="text-sm text-gray-500">(128 reviews)</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              💰 Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105"
            >
              🛒 Add to Cart
            </button>
          </div>

          {/* Success Message */}
          {message && (
            <p className="text-center text-green-600 mt-4 font-medium">{message}</p>
          )}

          {/* Back Link */}
          <Link
            to="/product"
            className="mt-6 text-center text-blue-600 hover:underline text-lg font-medium"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProDetial
