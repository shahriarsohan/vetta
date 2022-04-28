import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <div className="overlay" />
      <div className="stars" aria-hidden="true" />
      <div className="starts2" aria-hidden="true" />
      <div className="stars3" aria-hidden="true" />
      <main className="main">
        <section className="contact">
          <h1 className="title text-center">Vetta</h1>
          <h2 className="sub-title capitalize">we will serve you soon</h2>
        </section>
      </main>
    </div>
  )
}

export default Home
