import React from 'react'

function Pricing2() {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-600 min-h-screen p-4">
    <div className="h-full">
      {/* Card */}
      <div className="max-w-xs mx-auto">
        <div className="relative flex flex-col h-full bg-indigo-700 shadow-lg rounded-lg shadow-lg p-5">
          {/* Popular badge */}
          <div className="absolute top-0 right-5">
            <div className="text-xs inline-flex font-semibold bg-green-100 text-green-600 rounded-full text-center px-3 py-1.5 shadow-sm transform -translate-y-1/2">Most Popular</div>
          </div>
          {/* Card header */}
          <header className="pb-4 mb-4 border-b border-indigo-200 border-opacity-30">
            {/* Logo */}
            <div className="mb-2">
              <svg width={42} height={44} xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient x1="27.515%" y1="0%" x2="59.658%" y2="100%" id="b">
                    <stop stopColor="#5EEAD4" offset="0%" />
                    <stop stopColor="#2DD4BF" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="67.338%" y1="82.466%" x2="4.807%" y2="15.884%" id="c">
                    <stop stopColor="#F0FDFA" stopOpacity=".12" offset="0%" />
                    <stop stopColor="#F0FDFA" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="47.38%" y1="24.752%" x2="58.769%" y2="81.336%" id="e">
                    <stop stopColor="#0F766E" stopOpacity=".24" offset="0%" />
                    <stop stopColor="#0D9488" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <path id="a" d="M25.015 44 0 29.437 10.654 0l25.17 4.338L42 26.648z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <use fill="url(#b)" xlinkHref="#a" />
                  <path d="m10.281-.584 23.651 20.647 14.84 11.177 7.884-14.748-.927-9.78-11.44-7.296-8.81-3.26L20.02-4.62 10.281-.584Z" fill="url(#c)" style={{mixBlendMode: 'overlay'}} mask="url(#d)" />
                  <path d="M43.015 17.16-1.969 29.974l6.647 11.579c6.184 3.808 9.481 5.867 9.894 6.175.412.31 7.729.31 21.95 0l7.884-9.88-1.391-20.688Z" fill="url(#e)" style={{mixBlendMode: 'multiply'}} mask="url(#d)" />
                  <path fillOpacity=".32" fill="#F0FDFA" style={{mixBlendMode: 'overlay'}} mask="url(#d)" d="m36.18 3.3-2.17 16.714L23.625 48.18l20.15-5.107 5.89-11.297 1.085-18.881z" />
                </g>
              </svg>
            </div>
            {/* Product name */}
            <h3 className="text-xl font-extrabold text-indigo-50 leading-snug mb-2">Small Business</h3>
            {/* Price */}
            <div className="font-extrabold mb-1"><span className="text-2xl text-indigo-200">$</span><span className="text-4xl text-indigo-50">179</span></div>
            {/* Description */}
            <div className="text-indigo-200">Billed Yearly. Perfect for small businesses</div>
          </header>
          {/* Features list */}
          <ul className="text-indigo-200 text-sm space-y-2 flex-grow mb-6">
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Lorem ipsum dolor sit amet consecte.</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Lorem ipsum dolor sit amet consecte.</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Lorem ipsum dolor sit amet consecte.</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-green-500 mr-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Lorem ipsum dolor sit amet consecte.</span>
            </li>
          </ul>
          <button className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-green-400 hover:bg-green-500 text-white focus:outline-none focus-visible:ring-2">Call To Action</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pricing2