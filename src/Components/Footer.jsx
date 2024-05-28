import Logo from "../Logo";
import Button from "./Button";
import Fb from "./Fb";
import Ig from "./Ig";
import Youtube from "./Youtube";
import Twitter from "./Twitter";
import Pinterest from "./Pinterest";

export default function Footer() {
  const icons = [
    {
      icon: <Fb />,
      id: 1,
    },
    {
      icon: <Youtube />,
      id: 2,
    },
    {
      icon: <Twitter />,
      id: 3,
    },
    {
      icon: <Pinterest />,
      id: 4,
    },
    {
      icon: <Ig />,
      id: 5,
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-VeryDarkBlue w-full py-14 text-white ">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        {/* Desktop footer */}
        <div className="lg:flex hidden justify-between items-start">
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

          <div className="flex w-10/12 items-center mx-auto justify-between">
            {icons.map((media) => (
              <div key={media.id}>
                <div className="flex-shrink-0 flex-nowrap ">{media.icon}</div>
              </div>
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
