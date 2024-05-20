import logo from "../assets/logo.svg";
import Button from "./Button";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <div>
      <div className="lg:w-10/12 w-11/12 mx-auto mt-10 flex justify-between items-center">
        <div>
          <img className="h-6" src={logo} alt={"logo"} />
        </div>

        <div className="grid-cols-5 font-[500] text-DarkBlue lg:grid hidden">
          <nav>Pricing</nav>
          <nav>product</nav>
          <nav>About Us</nav>
          <nav>Careers</nav>
          <nav>Community</nav>
        </div>

        <div>
          <Button
            className="text-white px-7 text-[14px] font-[500] lg:block hidden"
            text={"Get started"}
          />
        </div>

        <div className="lg:hidden block">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
