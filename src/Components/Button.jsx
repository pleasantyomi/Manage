/* eslint-disable react/prop-types */
export default function Button({ text, onClick, className }) {
  return (
    <div>
      <button
        className={`${className} bg-BrightRed rounded-full py-3 hover:shadow-lg hover:shadow-BrightRed `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
