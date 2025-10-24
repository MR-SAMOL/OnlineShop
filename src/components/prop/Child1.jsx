import React from 'react'
import Login from './Login'

const Child1 = ({ data }) => {
  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <div 
          key={index}
          className="bg-white border  border-gray-200 rounded-lg shadow-sm flex flex-col items-center p-4"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-auto object-cover mb-4 rounded-lg "
          />

          <h2 className="text-gray-800 font-semibold mb-2 text-center">{item.name}</h2>

          <p className="text-green-600 font-medium mb-4">${item.price}</p>

          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Buy Now
          </button>
        </div>
      ))}
      <div className=' w-full h-[10vh] bg-amber-400'>
      <button onClick={()=>Login}>Login</button>
      </div>
    </div>
  )
}

export default Child1
