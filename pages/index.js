import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className = "font-sans max-w-xl mx-auto min-h-screen flex flex-col justify-center py-8">
      <Head>
        <title>Jason Rudin</title>
        <meta name="description" content="Jason Rudin's little corner of the internet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className = "">
        <header>
          <h1 className = "text-2xl">Hi, I'm Jason</h1>
          <h2 className = "text-zinc-500 text-lg">I build digital products in New York City.</h2>
        </header>
      </main>

      <section className = "mt-4 mb-2">
        <h3 className = "uppercase font-light text-sm text-zinc-500">A Quick Intro</h3>
        <div>
        <p className = "my-1">Thanks for stopping by! I think accelerating progress is one of the most important things to work on. In particular, I've long been fascinated by the connections between government and the private sector.</p>
        <p className = "my-1">I'm proudly one of three brothers.</p>
        </div>
      </section>

      <section className = "my-2">
        <h3 className = "uppercase font-light text-sm text-zinc-500">Experience</h3>
        <div>
          <ul className = "m-0">
            <li className = "flex flex-row items-baseline justify-between">
              <div className = "">Idea Explorer, ???</div>
              <div className = "text-sm font-light text-zinc-500 justify-self-end min-w-150">2022 — </div>
            </li>
            <li className = "flex flex-row items-baseline justify-between my-2">
              <div>Product Manager, Meta</div>
              <div className = "text-sm font-light text-zinc-500">2018 — 2022</div>
            </li>
            <li className = "flex flex-row items-baseline justify-between my-2">
              <div>Strategy Extern, Google[X]</div>
              <div className = "text-sm font-light text-zinc-500 min-w-150">2017 — 2018</div>
            </li>
            <li className = "flex flex-row items-baseline justify-between my-2">
              <div>Sr. Business Analyst, McKinsey</div>
              <div className = "text-sm font-light text-zinc-500 min-w-150">2014 — 2018</div>
            </li>
            <li className = "flex flex-row items-baseline justify-between my-2">
              <div>Student, M&T Program at the University of Pennsylvania</div>
              <div className = "text-sm font-light text-zinc-500 min-w-150">2010 — 2014</div>
            </li>
          </ul>
        </div>
      </section>

      <section className = "my-2">
        <h3 className = "uppercase font-light text-sm text-zinc-500">The other stuff</h3>
        <p>Check out <Link href = "/books"><a className = "underline">books</a></Link> I've read and some art I made. I also built my dining room table. It doesn't wobble.</p>
      </section>

      <section className = "mt-2 mb-4">
        <h3 className = "uppercase font-light text-sm text-zinc-500">Contact Info</h3>
        <p>Say hi on <a className = "underline" href = "https://twitter.com/jasonrudin">Twitter</a>, <a className = "underline" href = "https://www.linkedin.com/in/jasonrudin/">LinkedIn</a>, or email me at j.b.rudin [at] gmail [dot] com.</p>
      </section>

      <footer className = "text-xs font-light text-zinc-500 min-w-150">Last updated: February 24, 2022</footer>
    </div>
  )
}
