/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Rounded({ className, isActive }) {
  return (
    <div
      className={`${className} ${
        isActive ? "bg-BrightRed" : "bg-transparent"
      } h-3 w-3 rounded-full border-[1px] border-BrightRed  active:bg-BrightRed`}
    ></div>
  );
}
