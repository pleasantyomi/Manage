import logo from "../assets/logo.svg";
import Button from "./Button";
import Hamburger from "./Hamburger";
import image from "../assets/bg-tablet-pattern.svg";

export default function Header({ setIsMenuOpen }) {
  return (
    <div className="relative">
      <div className="lg:w-10/12 w-11/12 mx-auto flex justify-between items-center">
        <div>
          <img className="h-6" src={logo} alt={"logo"} />
        </div>

        <div className="grid-cols-5 font-[500] text-DarkBlue lg:grid hidden">
          <nav>Pricing</nav>
          <nav>Product</nav>
          <nav>About Us</nav>
          <nav>Careers</nav>
          <nav>Community</nav>
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
