"use client"
import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
  FaShoppingCart,
} from "react-icons/fa";
import Sidebar from "./SideBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  
  return (
    <>
      
      <div className="fixed w-full  h-20  px-4 flex items-center justify-around bg-gray-200">
        {/* logo */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="cursor-pointer">
            <FaBars/>
          </button>
          <h1>
            <img className="h-6" src="./logo.webp" alt="" />
          </h1>
        </div>
    
        {/* seach */}
        <div className="flex items-center rounded-full w-full max-w-3xl bg-white py-4 px-4">
          <FaSearch className="text-xl" />
          <input
            className="px-4 w-full outline-none"
            type="text"
            placeholder="Seach products, stores and recipes"
          />
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1">
          <FaMapMarkerAlt />
          <span>Thai Drive Southwest</span>
          <button>
            <FaChevronDown className="cursor-pointer" />
          </button>
        </div>

        {/* Cart */}
        <div >
          <button className="cursor-pointer flex items-center space-x-2 p-1 bg-green-500 rounded-full px-4 py-2">
            <FaShoppingCart />
            <span>0</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <>
        <div onClick={toggleMenu} className=" fixed top-0 left-0 w-full h-full backdrop-brightness-50 z-30">
          <div className="fixed top-0 left-0 w-72 h-screen bg-opacity-50  z-40">
          <Sidebar />
          </div>
        </div>
        </>
      )}
    </>
  );
}
