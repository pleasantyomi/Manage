import Button from "./Button";

export default function Simplify() {
  return (
    <div className="bg-BrightRed lg:bg-desktop bg-mobile bg-no-repeat w-full py-10 ">
      <div className="w-10/12 mx-auto lg:flex justify-between items-center text-white">
        <div>
          <h1 className="font-[600] lg:text-[44px] text-[38px] lg:w-8/12 lg:mx-0 mx-auto w-10/12 leading-[1.1] lg:text-left text-center">
            Simplify how your team works today
          </h1>
        </div>

        <div>
          <Button
            text={"Get Started"}
            className=" py-2 px-8 bg-white text-BrightRed lg:font-[500] font-[700] lg:mx-0 mx-auto block lg:mt-0 mt-8 lg:text-base text-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
