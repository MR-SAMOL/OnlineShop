import React, { useEffect, useState } from "react";

const Fech = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://thoenthonny.github.io/Coffee-Api/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-center text-amber-800 mb-8">
        ☕ Our Coffee Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((i) => (
          <div
            key={i.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={i.image}
              alt={i.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-amber-700">{i.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{i.description}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-amber-800 font-bold text-lg">
                  ${i.price || "4.99"}
                </span>
                <button className="bg-amber-700 text-white text-sm px-3 py-1 rounded-lg hover:bg-amber-800 transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fech;
