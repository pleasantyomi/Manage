import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-VeryDarkBlue w-full py-14 text-white ">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        {/* Desktop footer */}
        <div className="lg:flex hidden justify-between items-start">
          <div>
            <img className=" h-6" src={logo} alt={"logo"} />
          </div>

          <div className="grid gap-2 text-[14px]">
            <nav>Home</nav>
            <nav>Pricing</nav>
            <nav>Products</nav>
            <nav>About Us</nav>
          </div>

          <div className="grid gap-2 text-[14px]">
            <nav>Careers</nav>
            <nav>Community</nav>
            <nav>Privacy Policy</nav>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="bg-white rounded-full px-4 py-3 text-[12px] flex-shrink-0 flex-nowrap outline-none text-DarkBlue font-[500]"
            />
            <Button
              text={"Go"}
              className="px-6  flex-shrink-0 flex-nowrap text-[12px] font-[500]"
            />
          </div>
        </div>

        {/* Mobile footer */}
        <div className="grid lg:hidden gap-10">
          <div className="flex justify-between items-center gap-3 w-full">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="bg-white rounded-full px-4 py-3 text-[12px] w-full text-DarkBlue font-[500] outline-none "
            />
            <Button
              text={"Go"}
              className="px-6  flex-shrink-0 flex-nowrap text-[12px] font-[500]"
            />
          </div>

          <div className="flex justify-between w-10/12 mx-auto items-start">
            <div className="grid gap-2 text-[16px]">
              <nav>Home</nav>
              <nav>Pricing</nav>
              <nav>Products</nav>
              <nav>About Us</nav>
            </div>

            <div className="grid gap-2 text-[16px]">
              <nav>Careers</nav>
              <nav>Community</nav>
              <nav>Privacy Policy</nav>
            </div>
          </div>

          <div>
            <img src={logo} alt={"logo"} className="h-6 mx-auto" />
          </div>

          <div>
            <p className="text-center text-DarkGrayishBlue">
              Copyright {currentYear}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
