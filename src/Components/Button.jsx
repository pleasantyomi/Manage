/* eslint-disable react/prop-types */
export default function Button({ text, onClick, className }) {
  return (
    <div>
      <button
        className={`${className} bg-BrightRed rounded-full py-3 `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
