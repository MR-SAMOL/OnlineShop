import React, { useState } from "react";

const State = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[300px] h-[250px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Number
        </h1>

        <h2 className="text-4xl font-semibold text-blue-600">{number}</h2>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setNumber(number + 1)}
            className="px-5 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
          >
            +
          </button>
          <button
            onClick={() => setNumber(number - 1)}
            className="px-5 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
          >
            -
          </button>
          <button
            onClick={() => setNumber(0)}
            className="px-5 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-red-600 transition"
          >
            clear 
          </button>
        </div> 
      </div>
    </div>
  );
};

export default State;
