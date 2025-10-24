import React from "react";

const Child = ({ data }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="shadow-lg rounded-lg w-[80%]">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-800 text-left">
              <th className="py-3 px-4 border">ID</th>
              <th className="py-3 px-4 border">NAME</th>
              <th className="py-3 px-4 border">POSITION</th>
              <th className="py-3 px-4 border">SALARY</th>
              <th className="py-3 px-4 border text-center">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border font-semibold text-gray-800">
                  {item.name}
                </td>
                <td className="py-2 px-4 border">{item.position}</td>
                <td className="py-2 px-4 border text-green-600 font-semibold">
                  ${item.salary}
                </td>
                <td className="py-2 px-4 border text-center">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Child;
