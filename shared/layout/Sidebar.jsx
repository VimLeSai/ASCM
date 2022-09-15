import React from "react";
import HomeSVG from "icons/HomeSVG";
import AnalysisSVG from "icons/AnalysisSVG";

const Sidebar = () => {
  return (
    <aside
      className="w-64 h-full"
      aria-label="Sidebar"
      style={{
        height: "calc(100vh - 80px)",
        minWidth: "256px",
      }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-primary-400">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal leading-8 rounded-lg text-primary-900 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-300"
              tabIndex={-1}
            >
              <HomeSVG />
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li className="bg-opacity-50 rounded-lg bg-primary-300">
            <button
              type="button"
              className="flex items-center w-full p-2 text-base font-normal leading-8 transition duration-75 rounded-lg text-primary-900 group hover:bg-primary-100 dark:text-white dark:hover:bg-primary-300"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <AnalysisSVG />
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item=""
              >
                Analysis
              </span>
              <svg
                sidebar-toggle-item=""
                className="w-6 h-6"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul id="dropdown-example" className="py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-base font-normal leading-6 transition duration-75 bg-opacity-25 rounded-lg text-primary-900 bg-primary-100 pl-11 group hover:bg-primary-100 dark:text-white dark:hover:bg-primary-300"
                >
                  ASCM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-base font-normal leading-6 transition duration-75 rounded-lg text-primary-900 pl-11 group hover:bg-primary-100 dark:text-white dark:hover:bg-primary-300"
                  tabIndex={-1}
                >
                  Metric 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-base font-normal leading-6 transition duration-75 rounded-lg text-primary-900 pl-11 group hover:bg-primary-100 dark:text-white dark:hover:bg-primary-300"
                  tabIndex={-1}
                >
                  Metric 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
