"use client";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaHome, FaEnvelope, FaMobileAlt, FaCommentDots } from "react-icons/fa";
import MainCenter from "./MainCenter";
import { DiVim } from "react-icons/di";
export default function LeftMain() {
  const [active, setActiveItem] = useState<string>("Home");

  interface MenuItem {
    id: number;
    name: string;
    icons: IconType[];
  }

  const menuItem: MenuItem[] = [
    { id: 1, name: "Home", icons: [FaHome] },
    { id: 2, name: "Restaurants", icons: [FaEnvelope] },
    { id: 3, name: "Open Late", icons: [FaMobileAlt] },
    { id: 4, name: "EBT", icons: [FaCommentDots] },
    { id: 5, name: "Offers", icons: [FaHome] },
    { id: 6, name: "Grocery", icons: [FaHome] },
    { id: 7, name: "Convenience", icons: [FaHome] },
    { id: 8, name: "Alcohol", icons: [FaHome] },
    { id: 9, name: "Retail", icons: [FaHome] },
  ];
  return (
    <>
      <div className=" fixed w-52 h-screen bg-white ">
        {/* left main */}
        <div className=" flex flex-col h-full overflow-auto min-h-0 pb-72">
          {menuItem.map((item) => {
            const isActive = active === item.name;
            return (
              <div key={item.id} className="p-2">
                <button
                  onClick={() => setActiveItem(item.name)}
                  className={`flex rounded-full w-full py-2 px-2 space-x-2 cursor-pointer ${
                    isActive
                      ? "bg-green-950 text-white"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="text-2xl">
                    {item.icons.map((Icon, index) => (
                      <Icon key={index} />
                    ))}
                  </span>
                  <span>{item.name}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* bottom */}
        <div className="sticky bottom-0 bg-white border-t border-t-gray-200 p-5">
          <div className="pl-5">
            <span className=" text-lg">You</span>
          </div>
          <div className="pt-2 pl-5">
            <button className="bg-white hover:bg-amber-50 rounded-full py-2">
              Flyers
            </button>
          </div>
          <div className="pt-2 pl-5">
            <button className="bg-white hover:bg-amber-50 rounded-full py-2">
              Account
            </button>
          </div>
        </div>
      </div>
      <div>
        {active === "Home" && <MainCenter />}
        {active === "Restaurants" && <></>}
      </div>
    </>
  );
}
