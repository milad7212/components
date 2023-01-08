import React from "react";
import Wrap from "../hoc/Wrap";

function Timeline1() {
  return (
    <div className="wrapper bg-[#F64747] text-white  min-h-screen  relative">
      <nav
        className="nav__wrapper fixed h-full p-7 flex flex-col flex-nowrap justify-end"
        id="navbar-example"
      >
        <ul className=" mt-0 mr-0 mb-24 ml-7 z-30">
          {[1, 1, 1, 1, 1, 1].map((el, index) => (
            <li
              key={index}
              role="presentation"
              className="active relative transition-all duration-75 ease-out mb-4"
            >
              <div className="absolute block border-l-2 border-t-2 border-white h-64 w-5 -left-[30px] top-4"></div>
              <a
                href="#section1"
                className="block p-0  transition-all duration-75 ease-out hover:bg-transparent hover:pl-4 focus:bg-transparent"
              >
                <span className="nav__counter text-xl transition-all duration-75 ease-out">
                  01
                </span>
                <h3 className="nav__title text-2xl ml-1 w-72 h-0 overflow-hidden opacity-0 transition-all duration-75 ease-out">
                  Intro
                </h3>
                <p className="nav__body  w-72 h-0 overflow-hidden opacity-0 transition-all duration-75 ease-out  ">
                  <strong>Timeline-style navigation</strong>. Scroll down to see
                  what happens, or click on a number in the nav.
                </p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section
        className="section  h-screen bg-[#22A7F0] flex justify-center items-center"
        id="section1"
      >
        Scroll down or use the nav.
      </section>
      <section
        className="section h-screen bg-[#F64747] flex justify-center items-center"
        id="section2"
      >
        Section 2
      </section>
      <section
        className="section  h-screen bg-[#F9690E] flex justify-center items-center"
        id="section3"
      >
        Section 3
      </section>
      <section
        className="section  h-screen bg-[#9B59B6] flex justify-center items-center"
        id="section4"
      >
        Section 4
      </section>
      <section
        className="section  h-screen bg-[#03C9A9] flex justify-center items-center"
        id="section5"
      >
        Section 5
      </section>
      <section
        className="section  h-screen bg-[#ffcc00] flex justify-center items-center"
        id="section6"
      >
        Section 6
      </section>
    </div>
  );
}

export default Wrap(Timeline1);
