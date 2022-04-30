import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center font-monster">
      <main>
        <h1 className="mb-3 text-center text-3xl font-extrabold capitalize sm:text-6xl">
          UNDER CONSTRUCTION
        </h1>

        <div className="flex justify-center">
          <img
            // className="w-5/6"
            src="/images/img.png"
            height={500}
            width={500}
          />
        </div>
        <div>
          <p className="m-auto mt-2 w-3/4 text-center font-monster text-sm sm:text-lg">
            Our website is under construction. We are preparing something
            amazing and exciting for you! Have questions in the mean time?
          </p>
        </div>
        <a
          href="mailto:abrar.hossain.adib@gmail.com"
          className="m-auto mt-4 flex w-44 justify-center rounded-2xl bg-black px-4 py-2 text-white"
        >
          Contact
        </a>
        <p className="mt-10 text-center  text-gray-500">
          All rights reserved - Vetta © 2022
        </p>
      </main>
    </div>
  )
}

export default Home
