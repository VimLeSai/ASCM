import React from "react";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="flex items-baseline gap-2">
      <Image
        src="/logo-no-text.png"
        width={48}
        height={40}
        className="object-contain h-10"
      />
      <span className="text-3xl text-white">Muda</span>
    </div>
  );
};

export default HeaderLogo;
