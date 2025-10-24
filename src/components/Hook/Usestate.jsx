import React, { useState } from "react";

const Usesate = () => {
  const [name, setName] = useState("Samol");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(20);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          🧍‍♂️ User Information
        </h1>

        <form className="flex flex-col gap-4">
          <input
            onChange={(val) => setName(val.target.value)}
            type="text"
            placeholder="Enter Name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            onChange={(val) => setGender(val.target.value)}
            type="text"
            placeholder="Enter Gender"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            onChange={(val) => setAge(val.target.value)}
            type="number"
            placeholder="Enter Age"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </form>

        <div className="mt-6 bg-gray-100 rounded-xl p-4 text-center shadow-inner">
          <h3 className="text-xl font-semibold text-gray-700">
            Name: <span className="text-indigo-600">{name}</span>
          </h3>
          <h3 className="text-xl font-semibold text-gray-700">
            Gender: <span className="text-indigo-600">{gender}</span>
          </h3>
          <h3 className="text-xl font-semibold text-gray-700">
            Age: <span className="text-indigo-600">{age}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Usesate;
