import React, { useState } from "react";
import ButtonSwitch from "widgets/dashboard/ButtonSwitch";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const TYPES = {
  bar: "BAR",
  line: "LINE",
};

const Analysis = ({ data }) => {
  const [type, setType] = useState(TYPES.bar);

  const handleBarToLine = () => {
    setType(TYPES.line);
  };

  const handleLineToBar = () => {
    setType(TYPES.bar);
  };

  return (
    <>
      <div className="relative flex items-center justify-between max-w-full px-1">
        <ButtonSwitch
          type={type}
          TYPES={TYPES}
          handleBarToLine={handleBarToLine}
          handleLineToBar={handleLineToBar}
        />
        <h2 className="font-semibold">Visitors Every 15 Mins</h2>
        <div className="relative dropdown">
          <button
            className="dropdown-toggle px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton9"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Last 1 Hour
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              />
            </svg>
          </button>
          <ul
            className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
            aria-labelledby="dropdownMenuButton9"
          >
            <li>
              <a
                className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                href="#"
              >
                Action
              </a>
            </li>
            <li>
              <a
                className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <a
                className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mx-2 mt-6 mb-3 h-96 rounded-xl">
        {Boolean(type === TYPES.bar) ? (
          <BarChart data={data} />
        ) : (
          <LineChart data={data} />
        )}
      </div>
    </>
  );
};

export default Analysis;
