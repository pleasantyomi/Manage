import illustrator from "../assets/illustration-intro.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="w-10/12 mx-auto lg:mt-20 mt-10">
      <div>
        <img
          src={illustrator}
          alt={"Illustrator"}
          className="relative w-full h-full z-[9999] lg:hidden"
        />
      </div>
      <div className="lg:flex grid justify-between items-center">
        <div className="flex-shrink-0 flex-nowrap lg:w-5/12">
          <h1 className="text-DarkBlue font-[700]  text-[40px] lg:text-[56px] leading-[1.1] lg:text-left text-center mt-5">
            Bring everyone together to build better products.
          </h1>

          <p className="text-DarkGrayishBlue lg:w-9/12 w-10/12 mx-auto lg:mx-0 text-[17px] lg:mt-7 mt-5 lg:text-left text-center">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <Button
            text={"Get started"}
            className="capitalize text-white px-10 text-[14px] font-[500] lg:mt-8 mt-6 lg:mx-0 mx-auto block"
          />
        </div>

        <div>
          <img
            src={illustrator}
            alt={"Illustrator"}
            className="relative w-full h-[80vh] object-contain z-[9999] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
