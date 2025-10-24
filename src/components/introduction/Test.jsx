import React from "react";

const Test = () => {
  const name = "Kaka";
  const age = 20;
  const gender = "Female";

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[300px] h-[380px] bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center p-6">
        <img
          src="https://i.pinimg.com/736x/df/45/46/df454682d3ef0a96ad5bc801a5200a13.jpg"
          alt="profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow-md"
        />

        <div className="mt-4 text-center">
          <h1 className="text-xl font-semibold text-gray-800">Name: {name}</h1>
          <h1 className="text-lg text-gray-600">Gender: {gender}</h1>
          <h1 className="text-lg text-gray-600">Age: {age}</h1>
        </div>

        <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-medium rounded-xl shadow hover:bg-blue-600 transition">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Test;
