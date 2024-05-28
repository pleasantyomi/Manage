/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// import { stagger, animate } from "framer-motion";

// animate(".item", { x: 500 }, { delay: stagger(0.1) });

export default function Hamburger({ setIsMenuOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen, setIsMenuOpen]);

  return (
    <div className="">
      <button onClick={toggleMenu} className="grid gap-1 relative z-20">
        <div
          className={`bg-DarkBlue h-[3px] w-6 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`bg-DarkBlue h-[3px] w-6 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`bg-DarkBlue h-[3px] w-6 transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <div className="bg-white absolute left-1/2 transform -translate-x-1/2 w-11/12 text-center font-medium text-DarkBlue text-lg grid gap-5 py-8 rounded-md mt-16 z-50 ">
          <nav>Pricing</nav>
          <nav>Product</nav>
          <nav>About Us</nav>
          <nav>Careers</nav>
          <nav>Community</nav>
        </div>
      </div>
    </div>
  );
}
