import React from 'react'

function Search({query,handleInputChange}) {
  return (
    <>
     <input
          className=" text-black w-full bg-gray-300 rounded-md"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      
    </>
  )
}

export default Search;