import React, { useState } from "react";
import Wrap from "../hoc/Wrap";

function Hero13() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      x-data="{ isOpen: false }"
      className="w-full min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <nav className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <button onClick={() => setIsOpen((e) => !e)} className="md:hidden">
              <span x-show="isOpen">
                <svg
                  className="w-6 h-6 fill-gray-800 dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </span>
              <span x-show="!isOpen">
                <svg
                  className="w-6 h-6 text-gray-800 dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
              </span>
            </button>
            <div>
              <a
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                Brand
              </a>
            </div>
          </div>
          <div
            className={` ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 
            transition-all duration-300 ease-in-out bg-white dark:bg-gray-900
             top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0
              md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6
               md:flex md:items-center`}
          >
            <a
              href="#"
              className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Payment
            </a>
            <a
              href="#"
              className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Services{" "}
            </a>
            <a
              href="#"
              className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {" "}
              Account
            </a>
            <button className="w-full p-4 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
              <div className="flex items-center justify-center -mx-1">
                <p className="mx-1 text-sm text-gray-600 dark:text-white">
                  Coming Soon on
                </p>
                <svg
                  className="w-6 h-6 mx-1 fill-gray-600 dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </div>
            </button>
          </div>
        </nav>
        <section className="flex items-center flex-1">
          <div className="flex flex-col w-full ">
            <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                Coming
              </span>
              <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                Soon
              </span>
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              alias nihil incidunt.
            </p>
            <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <input
                id="email"
                type="text"
                className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
                placeholder="Email Address"
              />
              <button className="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Notify Me
              </button>
            </div>
            <p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">
              Notify me when App is launched :)
            </p>
          </div>
        </section>
        <footer className="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
          <a
            href="#"
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {" "}
            Privacy Policy{" "}
          </a>
          <div className="mt-4 -mx-4 md:mt-0">
            <a
              href="#"
              className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {" "}
              Facebook
            </a>
            <a
              href="#"
              className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Instagram
            </a>
            <a
              href="#"
              className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Wrap(Hero13)
