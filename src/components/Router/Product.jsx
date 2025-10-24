import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: 'Diamond Ring999',
      price: '$25',
      image: 'https://i.pinimg.com/736x/d4/95/da/d495da27ddfca8ae59c621b434857617.jpg',
      description: 'Beautiful and elegant diamond ring.'
    },
    {
      id: 2,
      name: 'Silver Necklace',
      price: '$29.99',
      image: 'https://i.pinimg.com/736x/1f/6d/66/1f6d66ebb2b7b6236e67cf5037890c5c.jpg',
      description: 'Stylish necklace perfect for gifts.'
    },
    {
      id: 3,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/86/9b/84/869b849412d7f7bbb8d93be9d72fea15.jpg',
      description: 'Premium quality earrings for special occasions.'
    },
    {
      id: 4,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/61/89/84/6189849d167adcc3b78e661ec747ea43.jpg',
      description: 'Premium quality earrings for special occasions.'
    },
    {
      id: 5,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/71/09/68/710968389609e90b94acbd974953b0b4.jpg',
      description: 'Premium quality earrings for special occasions.'
    },
    {
      id: 6,
      name: 'Gold Earrings',
      price: '$19.99',
      image: 'https://i.pinimg.com/1200x/7b/5a/14/7b5a141f025ece475f68229a6495f752.jpg',
      description: 'Premium quality earrings for special occasions.'
    },
  ]

  const handleView = (id) => {
    navigate(`/product/${id}`) // Navigate to product detail page
  }
  const Home = (id) => {
    navigate(`/home/${id}`) // Navigate to product detail page
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-300 to-black py-8 sm:py-12 px-4 sm:px-6">
      {/* Title */}
      <div className="flex justify-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className=" w-full h-full sm:h-72 md:h-80 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {item.description}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-red-600">
                  {item.price}
                </span>
              </div>

              {/* View Button Only */}
              <div className="mt-5 flex gap-4 justify-end sm:justify-end">
                <button
                  onClick={() => handleView(item.id)}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  View
                </button>
                <button
                  onClick={Home}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
