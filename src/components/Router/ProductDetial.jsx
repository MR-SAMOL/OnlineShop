// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useContext } from 'react'
// import Product, { ProContext } from './Product'

// export default function ProductDetail() {
//   const { id } = useParams()
//   const { products } = useContext(product)

//   const product = products.find((item) => item.id === Number(id))

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-600 text-xl">
//         Product not found.
//       </div>
//     )
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
//       <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full md:w-1/2 h-64 md:h-auto object-cover"
//         />
//         <div className="p-8 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-gray-600 mb-6">{product.description}</p>
//             <span className="text-2xl font-semibold text-red-600">{product.price}</span>
//           </div>
//           <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }