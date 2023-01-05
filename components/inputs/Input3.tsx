import React from 'react'
import Wrap from '../hoc/Wrap'

function Input3() {
  return (
    <form
    onSubmit={(e) => e.preventDefault()} 
    className="max-w-md px-4 mx-auto mt-12">
        <div>
            <label htmlFor="email" className="block py-3 text-gray-500">
                Your Email
            </label>
            <div className="flex items-center p-2 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <input
                    type="email"
                    placeholder="name@floatui.com"
                    id="email"
                    className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                />
            </div>
        </div>
</form>
  )
}

export default Wrap(Input3)