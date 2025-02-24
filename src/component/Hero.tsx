import React from "react";
import selambImage from "../assets/selamb.webp";

function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-around  bg-white py-20 px-6 lg:px-20">
      {/* Left Section - Text Content */}
      <div className="max-w-lg text-center lg:text-left space-y-2">
        <h3 className="text-[#272727] text-6xl font-mono font-extrabold tracking-wide">
          Välkommen
        </h3>
        <p className="text-[#555] text-lg font-sans leading-relaxed ml-5 font-semibold">
          Vi utför elinstallationer med huvudinriktning på styr & regleranläggningar.
          Även elinstallation i övrigt ingår i vårt verksamhetsområde.
          Allt från el-service till kompletta entreprenader.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="">
        <img src={selambImage} alt="Hero Image" 
        className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default React.memo(Hero);
