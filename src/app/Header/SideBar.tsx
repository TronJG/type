"use client";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-white h-screen p-6 overflow-auto">
        {/* info */}
      <div className="flex flex-col pb-10">
        <div className="flex justify-between">
          <p className="font-bold text-2xl">Trần B.</p>
          <img
            className="w-10 rounded-full bg-amber-300"
            src=""
            alt="./logo.jpg"
          />
        </div>
        <p className="text-sm space-x-1 pt-2">
          Instacart customer since June 2025
        </p>
      </div>
    {/* info today */}
      <div className="bg-orange-100 flex items-center justify-center p-2 rounded-sm">
        <div className="text-center">
          <p className="font-bold text-xl text-purple-800 ">
            Instacart+ perk alert!
          </p>
          <p className="text-purple-800 text-sm">
            $0 delivery fee on grocery and retail orders of $10+. Service fees
            apply. $35 min. for Costco.
          </p>
        </div>
      </div>

      <div className="pt-3 pb-8">
        <div className="bg-red-700 p-4 space-y-1.5 rounded-2xl">
          <p className="font-bold text-2xl text-pink-100">
            Start your free trial today!
          </p>
          <p className="text-pink-100 text-sm">You can cancel at any time.</p>
          <button className="font-bold rounded-xl text-white bg-gray-300 pl-2 pr-6 whitespace-nowrap cursor-pointer ">
            Try Instacart+ for free
          </button>
          <img className="h-3" src="./icon.webp" alt="" />
        </div>
      </div>
    {/* store info */}
      <div className="border-t border-gray-200 pb-6">
        <ul>
          <li>
            <button className="w-full bg-black text-white text-start rounded-sm p-2 font-bold">
              Stores
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold hover:bg-gray-50">
              Your Order
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Your List
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Your Recipes
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Your Account Settings
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              try instacart+
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Start a family account
            </button>
          </li>
        </ul>
      </div>
    {/* Credits and promos */}
      <div className="border-t p-2 border-gray-200">
        <p className="pt-2 text-gray-300 font-bold text-sm">Credits and promos</p>
        <ul>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              invite friend , earn money
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Buy gift card
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50 whitespace-nowrap">
              Creadit , promos, and gift cards
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Apply: instacart Mastercard
            </button>
          </li>
          </ul>
      </div>

      {/* our app */}
      <div className="border-t border-gray-200">
        <p className="pt-2 text-gray-300 font-bold text-sm">Support</p>
        <ul>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
             App Store
            </button>
          </li>
          <li>
            <button className="w-full text-black text-start rounded-sm p-2 font-bold text-sm hover:bg-gray-50">
              Ch Play
            </button>
          </li>
          </ul>
      </div>


    </div>
  );
}
