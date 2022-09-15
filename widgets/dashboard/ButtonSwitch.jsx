import React from "react";

const ButtonSwitch = ({ TYPES, type, handleLineToBar, handleBarToLine }) => {
  const sideClass = Boolean(type === TYPES.bar) ? "left-1" : "right-1";
  return (
    <div className="relative flex items-center w-48 p-1 bg-gray-200 border rounded-full shadow ">
      <div
        className="flex justify-center w-full cursor-pointer"
        onClick={handleLineToBar}
      >
        <button>Bar</button>
      </div>
      <div
        className="flex justify-center w-full cursor-pointer"
        onClick={handleBarToLine}
      >
        <button>Line</button>
      </div>
      <span
        className={`elSwitch bg-white shadow text-gray-800 flex items-center justify-center w-1/2 rounded-full transition-all capitalize duration-500 delay-200 top-[4px] absolute ${sideClass}`}
      >
        {type.toLowerCase()}
      </span>
    </div>
  );
};

export default ButtonSwitch;
