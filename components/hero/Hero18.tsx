import React from "react";
import Wrap from "../hoc/Wrap";

function Hero18() {
  return (
    <div className="min-h-screen grid grid-cols-[2fr_5fr] p-4 bg-gray-100">
      <div className=" relative flex flex-col  ">
        <div className="h-20  w-full">Brand Name</div>
        <div className="flex-grow flex justify-center items-center">
          <div className="w-80 h-80 rounded-full bg-gray-400 "></div>
        </div>
        <div className="h-20  w-full ">icons</div>
      </div>
      <div style={{direction:'rtl'}} className="bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-xl">
        <p className="">title</p>
        <p className="">Name</p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          consectetur unde sed sapiente reprehenderit facilis beatae neque
          exercitationem a incidunt?
        </p>
        </div>
      </div>
    </div>
  );
}

export default Wrap(Hero18);
