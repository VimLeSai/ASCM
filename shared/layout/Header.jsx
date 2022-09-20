import React from "react";
import HeaderLogo from "widgets/header/Logo";
import BarSVG from "icons/BarSVG";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-screen h-20 px-6 py-2 bg-primary-50 dark:bg-primary">
      <HeaderLogo />
      <BarSVG />
    </header>
  );
};

export default Header;
