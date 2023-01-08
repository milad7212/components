import React from "react";
import Wrap from "../hoc/Wrap";

function Navbar7() {
  return (
    <header className="w-full z-1000 h-20 lg:h-25 fixed transition-all duration-500 bg-transparent">
      <nav className="h-full pt-3 flex-col lg:flex-row lg:pt-0 transition-all w-full px-6 lg:px-24 xl:px-36 2xl:px-40 flex items-center justify-between duration-400 ">
        <a target="_self" className="lg:flex w-max hidden " href="/">
          <figure className="h-12 lg:h-17 flex justify-center">
            <img
              className="h-full"
              src="/assets/logo2.svg"
              alt="شهر هوشمند کیدزی"
            />
          </figure>
        </a>
        <div className="lg:hidden transition-all w-full h-15 flex iosHead items-center justify-between duration-400">
          <a target="_self" className="flex w-max " href="/">
            <figure className="h-12 lg:h-17 flex justify-center">
              <img
                className="h-full"
                src="/assets/logo2.svg"
                alt="شهر هوشمند کیدزی"
              />
            </figure>
          </a>
          <svg
            className="cursor-pointer duration-400 hamRotate "
            viewBox="0 0 100 100"
            width={80}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
        <ul className="invisible opacity-0 lg:visible lg:opacity-100 flex transition-all my-4 lg:my-0 h-full flex-col lg:flex-row items-center justify-evenly w-full duration-400">
          <li className="px-1 cursor-pointer duration-500 opacity-100 relative hover-line hover:opacity-75">
            <a
              target="_self"
              className="text-white font-YekanBakh text-xl"
              href="/"
            >
              صفحه نخست
            </a>
          </li>
          <li className="Header_subMenu__jn6Vn px-1 cursor-pointer duration-500 opacity-100 relative ">
            <div className="text-white font-YekanBakh text-xl flex items-center">
              محصولات
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="transform transition duration-400 mx-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={48}
                  d="M112 184l144 144 144-144"
                />
              </svg>
            </div>
            <ul>
              <li className="Header_subMenuItem__VBdxx">
                <a
                  target="_self"
                  className="text-white font-YekanBakh text-xl duration-300 py-2 pr-5 flex hover:bg-header-hover bg-transparent rounded-xl"
                  href="/digital-account"
                >
                  حساب دیجیتال
                </a>
              </li>
              <li className="Header_subMenuItem__VBdxx">
                <a
                  target="_self"
                  className="text-white font-YekanBakh text-xl duration-300 py-2 pr-5 flex hover:bg-header-hover bg-transparent rounded-xl"
                  href="/hambazy"
                >
                  همبازی
                </a>
              </li>
              <li className="Header_subMenuItem__VBdxx">
                <a
                  target="_self"
                  className="text-white font-YekanBakh text-xl duration-300 py-2 pr-5 flex hover:bg-header-hover bg-transparent rounded-xl"
                  href="/vidzy"
                >
                  ویدزی
                </a>
              </li>
              <li className="Header_subMenuItem__VBdxx">
                <a
                  target="_self"
                  className="text-white font-YekanBakh text-xl duration-300 py-2 pr-5 flex hover:bg-header-hover bg-transparent rounded-xl"
                  href="/parandeh"
                >
                  پرنده
                </a>
              </li>
            </ul>
          </li>
          <li className="px-1 cursor-pointer duration-500 opacity-100 relative hover-line hover:opacity-75">
            <a
              target="_self"
              className="text-white font-YekanBakh text-xl"
              href="/blog"
            >
              بلاگ
            </a>
          </li>
          <li className="px-1 cursor-pointer duration-500 opacity-100 relative hover-line hover:opacity-75">
            <a
              target="_self"
              className="text-white font-YekanBakh text-xl"
              href="/news"
            >
              اخبار
            </a>
          </li>
          <li className="px-1 cursor-pointer duration-500 opacity-100 relative hover-line hover:opacity-75">
            <a
              target="_self"
              className="text-white font-YekanBakh text-xl"
              href="/aboutus"
            >
              درباره ما
            </a>
          </li>
          <li className="px-1 cursor-pointer duration-500 opacity-100 relative hover-line hover:opacity-75">
            <a
              target="_self"
              className="text-white font-YekanBakh text-xl"
              href="/careers"
            >
              فرصت‌های شغلی
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Wrap(Navbar7);
