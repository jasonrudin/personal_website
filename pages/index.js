import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-zinc-700 font-ss max-w-xl mx-auto flex flex-col justify-center p-6 pt-20">
      <Head>
        <title>Jason Rudin</title>
        <meta name="description" content="Jason Rudin's corner of the internet." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="">
        <header>
          <h1 className="text-4xl">Hi, I'm Jason</h1>
          <h2 className="text-zinc-500">I build digital products in New York City.</h2>
        </header>
      </main>

      <section className="mt-8 mb-4">
        <h3 className="text-lg text-zinc-700 mb-2">A Quick Intro</h3>
        <div>
          <p className="my-1">Thanks for stopping by! I think accelerating progress is one of the most important things to work on. I am fascinated by the connections between government and the private sector.</p>
          <p className="my-1">Proudly one of three brothers.</p>
        </div>
      </section>
      <section className="my-4">
        <h3 className="text-lg text-zinc-700 mb-2">Experience</h3>
        <div>
          <ul className="">
            <li className="flex flex-row items-baseline justify-between">
              <div className="">Starting something new</div>
              <div className="text-sm font-light text-zinc-500 justify-self-end min-w-[100px]">2022 — </div>
            </li>
            <li className="flex flex-row items-baseline justify-between my-1">
              <div>Product Manager, Meta</div>
              <div className="text-sm font-light text-zinc-500 min-w-[100px]">2018 — 2022</div>
            </li>
            <li className="flex flex-row items-baseline justify-between my-1">
              <div>Strategy Extern, Google[X]</div>
              <div className="text-sm font-light text-zinc-500 min-w-[100px]">2017 — 2018</div>
            </li>
            <li className="flex flex-row items-baseline justify-between my-1">
              <div>Sr. Business Analyst, McKinsey</div>
              <div className="text-sm font-light text-zinc-500 min-w-[100px]">2014 — 2018</div>
            </li>
            <li className="flex flex-row items-baseline justify-between my-1">
              <div>Student, M&T Program at the University of Pennsylvania</div>
              <div className="text-sm font-light text-zinc-500 min-w-[100px]">2010 — 2014</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="my-4">
        <h3 className="font-light text-lg text-zinc-700 mb-2">The other stuff</h3>
        <p>Check out some <Link href="/art"><a className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75">art</a></Link> I made and <Link href="/books"><a className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75">books</a></Link> I've read. I also built my dining room table. It doesn't wobble.</p>
      </section>

      <section className="mt-4 mb-8">
        <h3 className="font-light text-lg text-zinc-700 mb-2">Contact Info</h3>
        <p>Say hi on <a className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75" href="https://twitter.com/jasonrudin" target="_blank" rel="noopener noreferrer">Twitter</a>, <a className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75" href="https://www.linkedin.com/in/jasonrudin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or email me at j.b.rudin [at] gmail [dot] com.</p>
      </section>

      <footer className="text-xs font-light text-zinc-500 min-w-150">Last updated: March 26, 2022</footer>
    </div>
  )
}
