import React from "react";
import Wrap from "../hoc/Wrap";

function Feature17() {
  return (
    <section className="relative">
      <div className="flex justify-center my-4 text-xl md:text-3xl">
        <p className="">مزایا</p>
      </div>
      <div className="grid grid-cols-3 my-6 max-w-5xl mx-auto ">
        <div className="flex flex-col justify-between items-center">
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-red-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-red-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-red-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
        <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-blue-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-blue-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-blue-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
        <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-green-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-green-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
          <p className="flex items-center gap-2 my-2">
            <span className="w-4 h-4 rounded-full bg-green-400 "></span>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Wrap(Feature17);
{
  /* <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transform -translate-y-1/2 absolute top-1/2 right-0 text-circle-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={8} cy={8} r={8} />
              </svg> */
}
