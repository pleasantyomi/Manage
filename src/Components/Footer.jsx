import { useState } from "react";
import Logo from "../Logo";
import Button from "./Button";
import Fb from "./Fb";
import Ig from "./Ig";
import Youtube from "./Youtube";
import Twitter from "./Twitter";
import Pinterest from "./Pinterest";
import HoverableIcon from "./HoverableIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const icons = [
    {
      icon: Fb,
      defaultFill: "#ffffff",
      hoverFill: "hsl(12, 88%, 59%)",
      id: 1,
    },
    {
      icon: Youtube,
      defaultFill: "#ffffff",
      hoverFill: "hsl(12, 88%, 59%)",
      id: 2,
    },
    {
      icon: Twitter,
      defaultFill: "#ffffff",
      hoverFill: "hsl(12, 88%, 59%)",
      id: 3,
    },
    {
      icon: Pinterest,
      defaultFill: "#ffffff",
      hoverFill: "hsl(12, 88%, 59%)",
      id: 4,
    },
    {
      icon: Ig,
      defaultFill: "#ffffff",
      hoverFill: "hsl(12, 88%, 59%)",
      id: 5,
    },
  ];

  const currentYear = new Date().getFullYear();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please insert a valid email.");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full text-white bg-VeryDarkBlue py-14 ">
      <div className="w-11/12 mx-auto lg:w-10/12">
        {/* Desktop footer */}
        <div className="items-start justify-between hidden grid-cols-4 lg:grid">
          <div>
            <Logo alt={"logo"} className="" fill={"#ffffff"} />
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

          <div>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Updates in your inbox..."
                className="bg-white rounded-full px-4 py-3 text-[12px] flex-shrink-0 flex-nowrap outline-none text-DarkBlue font-[500]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                text={"Go"}
                className="px-6  flex-shrink-0 flex-nowrap text-[12px] font-[500]"
                onClick={handleSubmit}
              />
            </div>

            {error && (
              <p className="ml-3 text-sm italic font-thin text-red-500">
                {error}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between w-7/12 place-content-end">
            {icons.map((media) => (
              <HoverableIcon
                key={media.id}
                icon={media.icon}
                defaultFill={media.defaultFill}
                hoverFill={media.hoverFill}
              />
            ))}
          </div>

          <div className="grid col-span-3 gap-4 grid-cols-subgrid">
            <div className="col-start-3">
              <p className="text-center text-DarkGrayishBlue">
                Copyright {currentYear}. All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* Mobile footer */}
        <div className="grid gap-10 lg:hidden">
          <div>
            <div className="flex items-center justify-between w-full gap-3">
              <input
                type="email"
                id="email"
                placeholder="Updates in your inbox..."
                className="bg-white rounded-full px-4 py-3 text-[12px] w-full text-DarkBlue font-[500] outline-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                text={"Go"}
                type={"submit"}
                className="px-6  flex-shrink-0 flex-nowrap text-[12px] font-[500]"
                onClick={handleSubmit}
              />
            </div>
            {error && (
              <p className="ml-3 text-sm italic font-thin text-red-500">
                {error}
              </p>
            )}
          </div>

          <div className="flex items-start justify-between w-10/12 mx-auto">
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

          <div className="flex items-center justify-between w-10/12 mx-auto">
            {icons.map((media) => (
              <HoverableIcon
                key={media.id}
                icon={media.icon}
                defaultFill={media.defaultFill}
                hoverFill={media.hoverFill}
              />
            ))}
          </div>

          <div>
            <Logo alt={"logo"} className="block mx-auto" fill={"#ffffff"} />
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
