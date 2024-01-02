"use client";

import { FaHeartCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { TbMessageReport } from "react-icons/tb";

function DataClient() {
  const [color, setColor] = useState("white");

  const handleClick = () => {
    setColor((prevColor) => (prevColor === "white" ? "red" : "white"));
  };

  return (
    <div className="flex gap-5">
      <FaHeartCirclePlus
        title="Add To Favorites"
        className={`hover:scale-110 cursor-pointer`}
        size={25}
        style={{ color: color }}
        onClick={handleClick}
      />
      <TbMessageReport
        size={25}
        title="Report Problem"
        className={`hover:scale-110 cursor-pointer`}
      />
    </div>
  );
}

export default DataClient;
