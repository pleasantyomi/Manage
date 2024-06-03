/* eslint-disable react/prop-types */
import { useState } from "react";

export default function HoverableIcon({ icon: Icon, defaultFill, hoverFill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <Icon fill={isHovered ? hoverFill : defaultFill} />
      </div>
    </div>
  );
}
