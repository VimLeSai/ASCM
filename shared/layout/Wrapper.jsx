import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex justify-start w-screen">
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
