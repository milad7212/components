import React from 'react'

function Newsletter2() {
  return (
    <section className="items-center mt-12 max-w-screen-xl mx-auto px-4 gap-4 md:flex xl:px-8 xl:gap-12">
    <div className="flex-1 space-y-4">
        <h1 className="text-2xl text-gray-800 font-semibold lg:text-3xl">
            Subscribe to our newsletter
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.  
        </p>
    </div>
    <div className="mt-5 flex-1">
        <form 
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center sm:flex">
            <input 
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
            />
            <button
                className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
            >
                Subscribe
            </button>
        </form>
        <p className="mt-3 text-[15px] text-gray-400">
            Product updates, announcements, and discounts.
            Read our <a className="text-indigo-600 underline" href="javascript:void(0)"> Privacy Policy </a>
        </p>
    </div>
</section>
  )
}

export default Newsletter2