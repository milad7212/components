import React from 'react'
import Wrap from '../hoc/Wrap'

function Section2() {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img alt="Party" src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
            veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>
          <a href="#" className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <span className="text-sm font-medium"> Get Started </span>
            <svg className="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Wrap(Section2)