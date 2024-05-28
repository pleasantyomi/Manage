/* eslint-disable react/prop-types */
import logo from "../assets/logo.svg";
import Button from "./Button";
import Hamburger from "./Hamburger";
import image from "../assets/bg-tablet-pattern.svg";

export default function Header({ setIsMenuOpen }) {
  const navs = [
    {
      nav: "Pricing",
      id: 1,
    },
    {
      nav: "Product",
      id: 2,
    },
    {
      nav: "About Us",
      id: 3,
    },
    {
      nav: "Careers",
      id: 4,
    },
    {
      nav: "Community",
      id: 5,
    },
  ];
  return (
    <div className="relative">
      <div className="lg:w-10/12 w-11/12 mx-auto flex justify-between items-center">
        <div>
          <img className="h-6" src={logo} alt={"logo"} />
        </div>

        <div className="grid-cols-5 font-[500] text-DarkBlue lg:grid hidden">
          {navs.map((navigation) => (
            <div key={navigation.id}>
              <nav className="cursor-pointer hover:text-DarkGrayishBlue">
                {navigation.nav}
              </nav>
            </div>
          ))}
        </div>

        <img
          src={image}
          alt={"image"}
          className="absolute lg:-right-[10rem] lg:-top-[11rem] -right-[5rem] -top-[5rem] z-[1] lg:w-7/12"
        />

        <div>
          <Button
            className="text-white px-7 text-[14px] font-[500] lg:block hidden z-[10] relative"
            text={"Get started"}
          />
        </div>

        <div className="lg:hidden block z-[10]">
          <Hamburger setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </div>
  );
}
