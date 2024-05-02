import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; // Function to toggle the sidebar state
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={` md:hidden
        fixed -right-100 top-0 w-[350px] h-screen bg-white shadow-lg overflow-auto transition duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="pt-20">
        <ul className="flex flex-col px-4 py-4 space-y-6">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT US</li>
          <li className="cursor-pointer">SHOP</li>
        </ul>
        <div onClick={toggleSidebar}>
          <IoCloseOutline className="w-10 h-10 absolute top-10 right-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;