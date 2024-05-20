/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleMenu} className="grid gap-1">
        <div
          className={`bg-DarkBlue h-[3px] w-6 transition-transform duration-300 ease-in-out  ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`bg-DarkBlue h-[3px] w-6 transition-transform duration-300 ease-in-out  ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`bg-DarkBlue h-[3px] w-6 transition-transform duration-300 ease-in-out  ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      <div
        className={`mt-5 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white absolute left-1/2 w-11/12 -translate-x-1/2 text-center font-[500] text-DarkBlue text-lg grid gap-5 py-8 rounded-md mt-3">
          <nav>Pricing</nav>
          <nav>product</nav>
          <nav>About Us</nav>
          <nav>Careers</nav>
          <nav>Community</nav>
        </div>
      </div>
    </div>
  );
}
