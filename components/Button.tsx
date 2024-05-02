'use client'
import React, { useState } from "react";

interface ButtonProps {
  text: string;
  isDisabled?: boolean; 
  handleClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, isDisabled, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleButtonClick = () => {
    if (!isDisabled && handleClick) {
      handleClick();
    } else if (!isDisabled) {
      toggleSidebar();
    }
  };

  return (
    <button
      className={`
        focus:outline-none px-5 py-3 text-[#866AAB] border-2 border-[#866AAB] hover:bg-[#866AAB] hover:text-white transition duration-300 ease-in-out
        ${isOpen ? "fixed right-0 top-0 z-50" : ""}
      `}
      onClick={handleButtonClick}
      disabled={isDisabled} 
    >
      {text}
    </button>
  );
};

export default Button;