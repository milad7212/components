import Wrap from "../hoc/Wrap";

 const Feature10 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Just do it
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="a0b40128-6963-4319-aeeb-471e92fa2d74"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">You</span>
            </span>{' '}
            miss 100% of the shots you don't take
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800">
              Change the world by being yourself.
            </span>
          </div>
          <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800">Die with memories, not dreams.</span>
          </div>
          <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800">What we think, we become.</span>
          </div>
          <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800">
              Be so good they can’t ignore you.
            </span>
          </div>
          <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800">
              Simplicity is the ultimate sophistication.
            </span>
          </div>
          <div className="flex items-center p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
            <div className="mr-2">
              <svg
                className="w-6 h-6 text-deep-purple-accent-400 sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800">
              Yesterday you said tomorrow. Just do it today.
            </span>
          </div>
        </div>
      </div>
    );
  };

  export default Wrap(Feature10);