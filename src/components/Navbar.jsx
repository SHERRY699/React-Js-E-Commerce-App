import React, { useState } from "react";
import Search from '../components/Search'
import {AiOutlineUserAdd,AiOutlineShoppingCart,AiFillHeart} from 'react-icons/ai'

function Navbar({dark,setdark,query,handleInputChange}) {
 
  return (
    <section>
      <div className="nav w-screen h-20 border-b-2 border-gray-500  flex items-center justify-evenly lg:justify-evenly lg:text-3xl dark:bg-black dark:text-gray-500 dark:border-white">
        <div className="logo font-bold ">
            SHERRY CART
        </div>
        <div className="search">
    <Search query={query} handleInputChange={handleInputChange} />
        </div>
        
        <div className="links md:flex font-bold text-2xl justify-between  gap-10 hidden">
          <AiFillHeart/>
          <AiOutlineShoppingCart/>
          <AiOutlineUserAdd/>
        </div>
        <div className="mode">
          <button onClick={()=>{
            setdark(!dark)
          }}>  {dark?'🌙':'💡'} </button>
     
        </div>
      </div>
    </section>
  );
}

export default Navbar;
