import React from 'react'

function Card3() {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
    <div className="h-full">
      {/* Card */}
      <div className="max-w-xs mx-auto">
        <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image */}
          <a className="block focus:outline-none focus-visible:ring-2" href="#0">
            <figure className="relative h-0 pb-[56.25%] overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638284256/course-img_tf0g8c.png" width={320} height={180} alt="Course" />
            </figure>
          </a>
          {/* Card Content */}
          <div className="flex-grow flex flex-col p-5">
            {/* Card body */}
            <div className="flex-grow">
              {/* Header */}
              <header className="mb-3">
                <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                  <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">The Ultimate JavaScript Course</h3>
                </a>
              </header>
              {/* Content */}
              <div className="mb-8">
                <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
              </div>
            </div>
            {/* Card footer */}
            <div className="flex justify-end space-x-2">
              <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a>
              <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500" href="#0">Preview</a>
              <a className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white" href="#0">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Card3