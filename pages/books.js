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
                    <Link href="/"><a className="text-xs underline text-zinc-500">← Home</a></Link>
                    <h1 className="text-2xl">Books</h1>
                    <h2 className="text-zinc-500">A running list of books I've read since 2015. Favorites are in blue.</h2>
                </header>
            </main>
            <section>
                <ul>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2022</h3>
                        <ul>
                            <li class = "underline "><a href="">The Catcher in the Rye</a></li>
                            <li class = "underline"><a href="">Sludge</a></li>
                            <li class = "underline text-blue-600"><a href="">All the Light we Cannot See</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2021</h3>
                        <ul>
                            <li class = "underline"><a href="https://www.amazon.com/Call-Wild-Readers-Library-Classics/dp/1954839146/ref=sr_1_9?crid=1S1RFL8BE5ATU&keywords=call+of+the+wild&qid=1646792761&sprefix=call+of+th%2Caps%2C762&sr=8-9">Call of the Wild</a></li>
                            <li class = "text-blue-600 underline"><a href="https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/1781396809/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646792705&sr=8-1">The Old Man and the Sea</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Sabbath-Classics-Abraham-Joshua-Heschel/dp/0374529752/ref=sr_1_3?crid=1UE7HSFUEAC0L&keywords=the+sabbath&qid=1646792786&sprefix=the+sa%2Caps%2C729&sr=8-3">The Sabbath</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Gatekeepers-White-Chiefs-Define-Presidency/dp/0804138249/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1646792808&sr=8-1">The Gatekeepers</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Superforecasting-Science-Prediction-Philip-Tetlock/dp/0804136718/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646792813&sr=8-1">Superforecasting</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/0349411905/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646792850&sr=8-1">Deep Work</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Art-Gathering-How-Meet-Matters/dp/1594634939/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646792859&sr=8-1">The Art of Gathering</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/How-Not-Die-Discover-Scientifically/dp/1250066115/ref=sr_1_1?crid=2H8PDGX5EZ7UP&keywords=how+not+to+die&qid=1646792886&sprefix=how+not+to%2Caps%2C1606&sr=8-1">How Not to Die</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2020</h3>
                        <ul>
                            <li class = "text-blue-600 underline"><a href="https://www.amazon.com/Order-without-Design-Markets-Cities/dp/0262038765/ref=sr_1_1?crid=2UBNIL506OGOC&keywords=order+without+design&qid=1646794804&sprefix=order%2Caps%2C1703&sr=8-1">Order Without Design</a></li>
                            <li class = "text-blue-600 underline"><a href="https://www.amazon.com/Story-Lost-Child-Neapolitan-Novels/dp/1609452860/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646794838&sr=1-1">The Story of a Lost Child</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205/ref=sr_1_1?crid=68T4KGGKQN5L&keywords=the+hard+thing+about+hard+things&qid=1646794810&sprefix=the+hard+thing%2Caps%2C1209&sr=8-1">The Hard Thing About Hard Things</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Christmas-Carol-Charles-Dickens/dp/1503212831/ref=sr_1_1_sspa?crid=1DFEMZ4BHEIG8&keywords=a+christmas+carol&qid=1646792683&sprefix=a+chri%2Caps%2C1226&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQkNNWDBQTjVDNUUmZW5jcnlwdGVkSWQ9QTA4ODA0MDgzRURLREozVjVPV0lRJmVuY3J5cHRlZEFkSWQ9QTA1NTQwMjAzMUQxTEhLMjdPTDJOJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">A Christmas Carol</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2019</h3>
                        <ul>
                            <li class = "underline"><a href="https://www.amazon.com/Walt-Disney-Triumph-American-Imagination/dp/0679757473/ref=sr_1_1?keywords=Walt+Disney%3A+The+Triumph+of+the+American+Imagination&qid=1646793126&sr=8-1">Walt Disney: The Triumph of the American Imagination</a></li>
                            <li class = "text-blue-600 underline"><a href="https://www.amazon.com/Pattern-Language-Buildings-Construction-Environmental/dp/0195019199/ref=sr_1_1?crid=1ABOPNAOJYW7C&keywords=a+pattern+language&qid=1646793143&sprefix=a+patte%2Caps%2C1168&sr=8-1">A Pattern Language</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501/ref=sr_1_1?crid=1M98DG6TXGNAW&keywords=educated&qid=1646793158&sprefix=e%2Caps%2C784&sr=8-1">Educated</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Subtle-Knife-His-Dark-Materials/dp/044041833X/ref=sr_1_1?crid=4S4II19PRL6O&keywords=the+subtle+knife&qid=1646793286&sprefix=th%2Caps%2C1067&sr=8-1">The Subtle Knife</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Amber-Spyglass-His-Dark-Materials/dp/0440418569/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646793293&sr=8-1">The Amber Spyglass</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Abraham-Verghese-Cutting-Stone-novel/dp/B0089RTFGG/ref=sr_1_2?keywords=cutting+for+stone&qid=1646793313&sr=8-2">Cutting for Stone</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Stocks-Long-Run-Definitive-Investment/dp/0071800514/ref=sr_1_1?keywords=stocks+for+the+long+run&qid=1646793326&sr=8-1">Stocks for the Long Run</a></li>
                            <li class = "text-blue-600 underline"><a href="https://www.amazon.com/My-Brilliant-Friend-Neapolitan-Novels/dp/1609450787/ref=sr_1_1?crid=3Q8EP1VJY6REP&keywords=my+brilliant+friend+by+elena+ferrante&qid=1646793353&sprefix=my+brilliant+frie%2Caps%2C914&sr=8-1">My Brilliant Friend</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Story-New-Name-Neapolitan-Novels/dp/1609451341/ref=sr_1_1?keywords=the+story+of+a+new+name+by+elena+ferrante&qid=1646793373&sprefix=the+story+of+a+new%2Caps%2C819&sr=8-1">The Story of a New Name</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Writing-Well-Classic-Guide-Nonfiction/dp/0060891548/ref=sr_1_1?crid=2CXE8CVRCIL49&keywords=on+writing+well&qid=1646793379&sprefix=on+wri%2Caps%2C760&sr=8-1">On Writing Well</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Those-Who-Leave-Stay-Neapolitan/dp/160945233X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1646793400&sr=8-1">Those Who Leae and Those Who Stay</a></li>
                            <li class = "underline"><a href="https://www.amazon.com/Churchill-Walking-Destiny-Andrew-Roberts/dp/1101980990/ref=sr_1_1?crid=1TAYPR968XJKS&keywords=walking+with+destiny&qid=1646793412&sprefix=walking+with+des%2Caps%2C768&sr=8-1">Walking With Destiny</a></li>
                        </ul>
                    </li>
                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2018</h3>
                        <ul>
                            <li class = "text-blue-600 underline"><a href="">The Power Broker</a></li>
                            <li class = "underline"><a href="">The Alchemist</a></li>
                            <li class = "text-blue-600 underline"><a href="">Making Cities Work</a></li>
                            <li class = "underline"><a href="">Midnights Children</a></li>
                            <li class = "underline"><a href="">The Golden Compass</a></li>
                            <li class = "underline"><a href="">Principles</a></li>
                            <li class = "underline"><a href="">Competing Against Luck</a></li>
                        </ul>
                    </li>

                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2017</h3>
                        <ul>
                            <li class = "underline"><a href="">When Breath Becomes Air</a></li>
                            <li class = "text-blue-600 underline"><a href="">Moonglow</a></li>
                            <li class = "underline"><a href="">The Private Lives of the Impressionists</a></li>
                            <li class = "underline"><a href="">Scarcity</a></li>
                            <li class = "underline"><a href="">Evicted</a></li>
                            <li class = "underline"><a href="">Exit West</a></li>
                            <li class = "underline"><a href="">Americanah</a></li>
                            <li class = "underline"><a href="">American Gods</a></li>
                            <li class = "underline"><a href="">The Undoing Project</a></li>
                            <li class = "underline"><a href="">Ready Player One</a></li>
                            <li class = "underline"><a href="">The Checklist Manifesto</a></li>
                            <li class = "underline"><a href="">The Curious Incident of the Dog in the Nighttime</a></li>
                            <li class = "underline"><a href="">Homegoing</a></li>
                            <li class = "underline"><a href="">Grit</a></li>
                            <li class = "underline"><a href="">The Nix</a></li>
                        </ul>
                    </li>

                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2016</h3>
                        <ul>
                            <li class = "underline"><a href="">what if?</a></li>
                            <li class = "underline"><a href="">Gödel, Escher, Bach</a></li>
                            <li class = "underline"><a href="">Sapiens</a></li>
                            <li class = "underline"><a href="">Boys in the Boat</a></li>
                            <li class = "underline"><a href="">Song of Solomon</a></li>
                            <li class = "underline"><a href="">H is for Hawk</a></li>
                            <li class = "text-blue-600 underline"><a href="">The Amazing Adventures of Kavalier and Clay</a></li>
                            <li class = "underline"><a href="">Gratitude</a></li>
                            <li class = "underline"><a href="">Strangers in their own Land</a></li>
                            <li class = "underline"><a href="">Originals</a></li>
                            <li class = "underline"><a href="">Between the World and Me</a></li>
                            <li class = "underline"><a href="">The Most Good You Can Do</a></li>
                            <li class = "underline"><a href="">The Autobiography of Benjamin Franklin</a></li>
                            <li class = "underline"><a href="">The Goldfinch</a></li>
                            <li class = "underline"><a href="">The Five People You Meet in Heaven</a></li>
                            <li class = "underline"><a href="">Brighton Beach Memoirs</a></li>
                        </ul>
                    </li>

                    <li className="my-5">
                        <h3 className="text-sm font-light text-zinc-500">2015</h3>
                        <ul>
                            <li class = "underline"><a href="">Work Rules!</a></li>
                            <li class = "underline"><a href="">Difficult Men</a></li>
                            <li class = "underline"><a href="">The Interestings</a></li>
                            <li class = "underline"><a href="">The Talent Code</a></li>
                            <li class = "text-blue-600 underline"><a href="">East of Eden</a></li>
                            <li class = "underline"><a href="">One Summer</a></li>
                            <li class = "underline"><a href="">The Design of Everyday Things</a></li>
                            <li class = "text-blue-600 underline"><a href="">100 Years of Solitude</a></li>
                            <li class = "underline"><a href="">Misbehaving</a></li>
                            <li class = "underline"><a href="">A Sleepwalkers Guide to Dancing</a></li>
                            <li class = "text-blue-600 underline"><a href="">Zen and the Art of Motorcycle Maintenance</a></li>
                            <li class = "underline"><a href="">The Death and Life of Great American Cities</a></li>
                            <li class = "underline"><a href="">Being Mortal</a></li>
                            <li class = "underline"><a href="">The Rosie Effect</a></li>
                            <li class = "text-blue-600 underline"><a href="">The Old Man and the Sea</a></li>
                        </ul>
                    </li>

                </ul>
            </section>
        </div>
    )
}

