import React from 'react'
import Wrap from '../hoc/Wrap'

function Hero3() {
  return (
    <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:dark:bg-gray-900">
			<span className="block mb-2 dark:dark:text-violet-400">Mamba design system</span>
			<h1 className="text-5xl font-extrabold dark:dark:text-gray-50">Build it with Mamba</h1>
			<p className="my-8">
				<span className="font-medium dark:dark:text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
			</p>
			<form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label for="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:dark:border-gray-700" />
				</div>
				<div>
					<label for="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:dark:border-gray-700" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded dark:dark:bg-violet-400 dark:dark:text-gray-900">Join the waitlist</button>
			</form>
		</div>
		<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:dark:bg-gray-500" />
	</div>
</section>
  )
}

export default Wrap(Hero3)