import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-zinc-700 font-ss max-w-2xl mx-auto flex flex-col justify-center p-6 pt-20">
      <Head>
        <title>Jason Rudin</title>
        <meta name="description" content="Jason Rudin's corner of the internet." />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
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
          <p className="my-1">Thanks for stopping by!</p>
          <p> I'm most excited by how get things in the physical world built faster. I'm building <a target = "_blank" rel="noopener noreferrer" href = "https://www.withclad.com" className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75">Clad</a>, an operating system for telecom construction.</p>
          <p className="my-1">I love this Churchill quote - "We shape our buildings; thereafter they shape us."</p>
          <p className="my-1">Proudly one of three brothers.</p>
        </div>
      </section>
      <section className="my-4">
        <h3 className="text-lg text-zinc-700 mb-2">Experience</h3>
        <div>
          <ul className="">
            <li className="flex flex-row items-baseline justify-between">
              <div className=""><a target = "_blank" rel="noopener noreferrer" href = "https://www.withclad.com" className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75">Founder, Clad</a></div>
              <div className="text-sm font-light text-zinc-500 justify-self-end min-w-[100px]">2022 — </div>
            </li>
            <li className="flex flex-row items-baseline justify-between my-1">
              <div><Link href="/meta"><a className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75">Product Manager, Meta</a></Link></div>
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

      <footer className="text-xs font-light text-zinc-500 min-w-150">Last updated: August 31, 2022</footer>
    </div>
  )
}
