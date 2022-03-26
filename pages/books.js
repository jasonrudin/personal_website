import Head from 'next/head'
import Link from 'next/link'

export default function Books() {
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
            <main>
                <header className="">
                    <Link href="/">
                        <a className="fixed h-10 top-0 left-0 w-full bg-white border-b-[1px] z-10 px-6 py-2 underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic md:p-0 md:h-auto md:border-0 md:relative md:w-auto md:bg-transparent md:text-xs">← Home</a>
                    </Link>
                    <h1 className="text-4xl mt-8 md:mt-4">Books</h1>
                    <h2 className="text-zinc-500">Some of my favorites.</h2>
                </header>
            </main>

            <section>
                <ul>
                    <li className=" mt-8 mb-4">
                        <h3 className="text-lg text-zinc-700 mb-4">Cities & Spaces</h3>
                        <ul>
                            {
                                cityBooksArray.map((book, key) => (
                                    <BookItem book={book} />
                                ))
                            }
                        </ul>
                    </li>
                    <li className="my-8">
                        <h3 className="text-lg text-zinc-700 mb-4">Fiction</h3>
                        <ul>
                            {
                                fictionBooksArray.map((book, key) => (
                                    <BookItem book={book} />
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}

function BookItem(props) {
    return (
        <li className="my-1">
            <a href={props.book.url} className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 transition duration-75" target="_blank" rel="noopener noreferrer">{props.book.title}</a>
        </li>
    );
}

const cityBooksArray = [
    {
        id: 1,
        title: 'The Power Broker',
        url: "https://www.amazon.com/Power-Broker-Robert-Moses-Fall/dp/0394720245/ref=sr_1_1?keywords=the+power+broker&qid=1646795014&s=books&sr=1-1",
    },
    {
        id: 2,
        title: 'Order without Design',
        url: "https://www.amazon.com/Order-without-Design-Markets-Cities/dp/0262038765/ref=sr_1_1?crid=2UBNIL506OGOC&keywords=order+without+design&qid=1646794804&sprefix=order%2Caps%2C1703&sr=8-1",
    },
    {
        id: 3,
        title: 'The Death and Life of Great American Cities',
        url: "https://www.amazon.com/Death-Life-Great-American-Cities/dp/067974195X/ref=sr_1_1?keywords=death+and+life+of+great+american+cities&qid=1648302337&sprefix=death+and+life+%2Caps%2C66&sr=8-1",
    },
    {
        id: 4,
        title: 'Making Cities Work',
        url: "https://www.amazon.com/Making-Cities-Work-Prospects-Policies/dp/0691131058/ref=sr_1_1?crid=1Z3Q2BCAH6LXL&keywords=making+cities+work&qid=1646795029&sprefix=maki%2Caps%2C1050&sr=8-1",
    },
    {
        id: 5,
        title: 'A Pattern Language',
        url: "https://www.amazon.com/Pattern-Language-Buildings-Construction-Environmental/dp/0195019199/ref=sr_1_1?crid=1ABOPNAOJYW7C&keywords=a+pattern+language&qid=1646793143&sprefix=a+patte%2Caps%2C1168&sr=8-1",
    },
    {
        id: 6,
        title: 'Evicted',
        url: "https://www.amazon.com/Evicted-Poverty-Profit-American-City/dp/0553447459/ref=sr_1_1?crid=86NNG6WNEYYA&keywords=evicted&qid=1646795347&sprefix=evi%2Caps%2C783&sr=8-1",
    },

];

const fictionBooksArray = [
    {
        id: 1,
        title: 'East of Eden',
        url: "https://www.amazon.com/East-Eden-Penguin-Orange-Collection/dp/0143129481/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1648302836&sr=8-1",
    },
    {
        id: 2,
        title: '100 Years of Solitude',
        url: "https://www.amazon.com/Hundred-Solitude-Harper-Perennial-Classics/dp/0060883286/ref=sr_1_1?keywords=100+years+of+solitude+by+gabriel+garcia+marquez&qid=1648302847&sprefix=100+years+o%2Caps%2C60&sr=8-1",
    },
    {
        id: 3,
        title: 'Zen and the Art of Motorcycle Maintenance',
        url: "https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060839872/ref=sr_1_1?keywords=zen+and+the+art+of+motorcycle+maintenance&qid=1648302857&sprefix=zen+an%2Caps%2C63&sr=8-1",
    },
    {
        id: 4,
        title: 'The Old Man and the Sea',
        url: "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/1781396809/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646792705&sr=8-1",
    },
    {
        id: 5,
        title: 'The Amazing Adventures of Kavalier and Clay',
        url: "https://www.amazon.com/Amazing-Adventures-Kavalier-Clay/dp/0812983580/ref=sr_1_1?keywords=the+amazing+adventures+of+kavalier+%26+clay&qid=1648302867&sprefix=the+amazing+adv%2Caps%2C68&sr=8-1",
    },
    {
        id: 6,
        title: 'Song of Solomon',
        url: "https://www.amazon.com/Song-Solomon-Toni-Morrison/dp/140003342X/ref=sr_1_1?keywords=song+of+solomon+by+toni+morrison&qid=1648302876&sprefix=song+of+sol%2Caps%2C75&sr=8-1",
    },
    {
        id: 7,
        title: 'My Brilliant Friend (and the rest of the Neopolitan novels)',
        url: "https://www.amazon.com/My-Brilliant-Friend-Neapolitan-Novels/dp/1609450787/ref=sr_1_1?crid=3Q8EP1VJY6REP&keywords=my+brilliant+friend+by+elena+ferrante&qid=1646793353&sprefix=my+brilliant+frie%2Caps%2C914&sr=8-1",
    },
    {
        id: 8,
        title: 'Midnights Children',
        url: "https://www.amazon.com/Midnights-Children-Modern-Library-Novels/dp/0812976533/ref=sr_1_1?crid=1GJNTY9CUO65W&keywords=midnights+children&qid=1646795064&s=books&sprefix=midni%2Cstripbooks%2C1306&sr=1-1",
    },
];

