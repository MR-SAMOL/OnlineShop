import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dynamic = () => {
  const items = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/11/aa/cc/11aaccbfbba12.jpg",
      img1: "",
      img2: "",
      img3: "",
      name: "Iced Latte",
      dis: "Refreshing blend of espresso, milk, and ice.",
      price: 4.99,
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/45/cc/33/45cc33a9b9cdd.jpg",
      img1: "",
      img2: "",
      img3: "",
      name: "Cappuccino",
      dis: "Creamy and smooth, with a perfect foam top.",
      price: 5.5,
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/88/ff/22/88ff22aa11cc.jpg",
      img1: "",
      img2: "",
      img3: "",
      name: "Espresso",
      dis: "Strong and bold, a true coffee lover’s shot.",
      price: 3.5,
    },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((i) => (
                  <div
                    key={i.id}
                    className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-transform"
                  >
                    <img
                      src={i.image}
                      alt={i.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h2 className="text-lg font-semibold text-amber-800">
                        {i.name}
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">{i.dis}</p>
                      <div className="mt-3 flex justify-center items-center gap-4">
                        <span className="text-amber-700 font-bold">
                          ${i.price.toFixed(2)}
                        </span>
                        <button className="bg-amber-700 text-white text-sm px-3 py-1 rounded-md hover:bg-amber-800 transition">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Dynamic;
