import React, { useState } from "react";

export default function HoverText() {
  const [hovered, setHovered] = useState(false);

  return (
    <p className="text-lg text-gray-500 mb-8">
      Sometimes I {" "}
      <span
        className="font-bold text-gray-400"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? "break" : "build"}
      </span>{" "}
      things.
    </p>
  );
}




