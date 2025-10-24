import React, { useEffect, useState } from "react";

const UseEfect = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((count) => count + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="bg-gray-700 p-10 rounded-2xl shadow-2xl border border-gray-600">
        <h1 className="text-4xl font-bold mb-4 text-cyan-400 drop-shadow-lg tracking-widest">
          Timer ⏱️
        </h1>
        <div className="text-6xl font-mono font-extrabold text-yellow-300 bg-gray-900 px-10 py-4 rounded-lg shadow-inner border border-gray-500">
          {second}s
        </div>
        <p className="text-gray-400 mt-4 text-sm italic">
          Counting seconds since start...
        </p>
      </div>
    </div>
  );
};

export default UseEfect;
