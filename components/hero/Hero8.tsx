import React from 'react'
import Wrap from '../hoc/Wrap'

function Hero8() {
  return (
    
    <div className="flex flex-wrap md items-center h-screen">
    <div className="bg-white w-full md:w-1/2 h-screen">
      <div className="mx-32">
        <h1 className="text-6xl font-bold mt-16">Tokyo</h1>
        {/* country region island */}
        <div className="flex mt-16 font-light text-gray-500">
          <div className="pr-4">
            <span className="uppercase">Country</span>
            <p className="text-2xl text-gray-900 font-semibold pt-2">Japan</p>
          </div>
          <div className="pr-4">
            <span className="uppercase">Region</span>
            <p className="text-2xl text-gray-900 font-semibold pt-2">Kanto</p>
          </div>
          <div className="pr-4">
            <span className="uppercase">island</span>
            <p className="text-2xl text-gray-900 font-semibold pt-2">Honshu</p>
          </div>
        </div>
        {/* description */}
        <div className="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
          Tokyo, Japan’s busy capital, mixes the ultramodern and the
          traditional, from neon-lit skyscrapers to historic temples. The
          opulent Meiji Shinto Shrine is known for its towering gate and
          surrounding woods. The Imperial Palace sits amid large public
          gardens
        </div>
        <button className="uppercase mt-5 text-sm font-semibold hover:underline">
          read more
        </button>
      </div>
    </div>
    <div className="bg-red-600 w-full md:w-1/2 h-screen">
      <img src="https://source.unsplash.com/7H77FWkK_x4/1600x900" className="h-screen w-full" alt="" />
    </div>
  </div>
  )
}

export default Wrap(Hero8)