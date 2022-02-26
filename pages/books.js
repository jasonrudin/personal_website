import Head from 'next/head'
import Link from 'next/link'

export default function Books() {
    return (
        <div className="font-sans max-w-xl mx-auto min-h-screen flex flex-col justify-center py-8">
            <Head>
                <title>Jason Rudin</title>
                <meta name="description" content="Jason Rudin's little corner of the internet." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <header>
                    <Link href = "/"><a className = "text-xs underline text-zinc-500">Home</a></Link>
                    <h1 className="text-2xl">Books</h1>
                    <h2 className="text-zinc-500">A running list of books I've read since 20XX. Favorites are in blue.</h2>
                </header>
            </main>
            <section>
                <ul>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2022</h3>
                        <ul>
                            <li><a href="">The Catcher in the Rye</a></li>
                            <li><a href="">Sludge</a></li>
                            <li><a href="">All the Light we Cannot See</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2021</h3>
                        <ul>
                            <li><a href="">The Catcher in the Rye</a></li>
                            <li><a href="">Sludge</a></li>
                            <li><a href="">All the Light we Cannot See</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2020</h3>
                        <ul>
                            <li><a href="">The Catcher in the Rye</a></li>
                            <li><a href="">Sludge</a></li>
                            <li><a href="">All the Light we Cannot See</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2019</h3>
                        <ul>
                            <li><a href="">The Catcher in the Rye</a></li>
                            <li><a href="">Sludge</a></li>
                            <li><a href="">All the Light we Cannot See</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2018</h3>
                        <ul>
                            <li><a href="">The Catcher in the Rye</a></li>
                            <li><a href="">Sludge</a></li>
                            <li><a href="">All the Light we Cannot See</a></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}