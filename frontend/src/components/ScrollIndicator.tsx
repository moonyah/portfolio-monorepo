import React from "react";

interface Props {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const ScrollIndicator: React.FC<Props> = ({
  currentSection,
  scrollToSection,
}) => (
  <ul className="fixed right-5 top-1/2 transform -translate-y-1/2 list-none z-10">
    {[0, 1, 2].map((index) => (
      <li
        key={index}
        className={`w-3 h-3 rounded-full border border-gray-500 mb-2 ${
          currentSection === index
            ? "bg-gray-800 border-gray-800"
            : "bg-transparent"
        } cursor-pointer hover:bg-gray-600`}
        onClick={() => scrollToSection(index)}
      ></li>
    ))}
  </ul>
);

export default ScrollIndicator;
