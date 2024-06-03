/* eslint-disable react/no-unescaped-entities */
import image from "../assets/bg-tablet-pattern.svg";
import Button from "./Button";
import MobileSlider from "./MobileSlider";
import Slider from "./Slider";

export default function Testimony() {
  return (
    <div className="relative w-screen mb-20 lg:mt-32">
      <div>
        <div>
          <img
            src={image}
            alt="Image"
            className="absolute w-5/12 -left-[20rem] -top-[15rem]"
          />
        </div>

        <div>
          <h1 className="text-center font-[700] lg:text-[40px] text-[36px] text-DarkBlue mb-10">
            What they've said
          </h1>

          <div>
            <Slider />
            <MobileSlider />
          </div>

          <div>
            <Button
              text={"Get Started"}
              className="px-10 py-2 text-white font-[500] block mx-auto  hover:shadow-lg hover:shadow-BrightRed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
