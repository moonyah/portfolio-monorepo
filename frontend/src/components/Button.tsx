import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-block items-center justify-center px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base bg-gray-600 bg-opacity-60 text-white rounded-full hover:bg-black hover:bg-opacity-70 hover:text-gray-300 transition duration-300 ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
