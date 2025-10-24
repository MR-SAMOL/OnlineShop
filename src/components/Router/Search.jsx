import React, { useState } from 'react'

const Search = () => {
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim() === "") {
      alert("⚠️ Please enter something to search!")
    } else {
      alert(`🔍 Searching for "${query}"...`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-black flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Search Products
        </h2>

        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm"
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition w-full sm:w-auto"
          />
          <button
            type="submit"
            className="mt-3 sm:mt-0 sm:ml-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition w-full sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
