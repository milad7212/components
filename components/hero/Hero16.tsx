import React, { useState } from "react";
import Wrap from "../hoc/Wrap";

function Hero16() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav
        x-data="{ isOpen: false }"
        className="bg-white shadow dark:bg-gray-900"
      >
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Brand
                </a>
              </div>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen((e) => !e)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out
           bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900
            lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0`}
            >
              <div className="-mx-4 lg:flex lg:items-center">
                <a
                  href="#"
                  className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Web developers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Web Designers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  UI/UX Designers
                </a>
                <a
                  href="#"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")',
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Build your new <span className="text-blue-400">Saas</span> Project
            </h1>
            <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Wrap(Hero16);
