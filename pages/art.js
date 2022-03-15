import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Art() {
    return (
        <div className="font-sans max-w-xl mx-auto min-h-screen flex flex-col justify-center p-6">
            <Head>
                <title>Art</title>
                <meta name="description" content="Jason Rudin's corner of the internet." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <header className="">
                    <Link href="/"><a className="text-xs underline text-zinc-500">← Home</a></Link>
                    <h1 className="text-2xl mt-2">Art</h1>
                    <h2 className="text-zinc-500">I like to draw and paint sometimes.</h2>
                </header>
            </main>
            <section className = "">
                {imageArray.map((image) => (
                    <div className = "my-2">
                        <Image
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            layout="responsive"
                            className="rounded-xl"
                            quality={100}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </section>

        </div>
    )
}

const imageArray = [
    {
        title: "Strawberries",
        medium: "Colored Pencil",
        url: "/static/img/art/strawberries.png",
        alt: "Strawberries on a white background.",
        width: 361,
        height: 265
    },
    {
        title: "Abstract Blocks",
        medium: "Oil on Canvas",
        url: "/static/img/art/abstract_blocks.png",
        alt: "Blocks of color painted from above.",
        width: 1000,
        height: 503
    },
    {
        title: "Abstract Blue",
        medium: "Oil on Canvas",
        url: "/static/img/art/abstract_blue.png",
        alt: "Gradations of blue and white.",
        width: 1000,
        height: 666
    },
    {
        title: "Ball and Glove",
        medium: "Colored Pencil",
        url: "/static/img/art/ball_and_glove.png",
        alt: "A baseball glove and ball.",
        width: 800,
        height: 637
    },
    {
        title: "Florida Bridges",
        medium: "Oil on Canvas",
        url: "/static/img/art/bridges.png",
        alt: "Two bridges in the Florida Keys.",
        width: 800,
        height: 629
    },
    {
        title: "Flowers",
        medium: "Oil on Canvas",
        url: "/static/img/art/flowers.png",
        alt: "White flowers in a vase",
        width: 700,
        height: 870
    },
    {
        title: "Code Monkeys 1",
        medium: "3D Modeling (Maya)",
        url: "/static/img/art/code monkeys_1.png",
        alt: "A late night of code monkey coding.",
        width: 800,
        height: 497
    },
    {
        title: "Code Monkeys 2",
        medium: "3D Modeling (Maya)",
        url: "/static/img/art/code monkeys_2.png",
        alt: "Close-up of a code monkey desk.",
        width: 800,
        height: 600
    },
    {
        title: "Kilns",
        medium: "Charcoal on Paper",
        url: "/static/img/art/kilns.png",
        alt: "Sketch drawing of pottery kilns.",
        width: 1362,
        height: 1790
    },
    {
        title: "Markers",
        medium: "Acrylic on Canvas",
        url: "/static/img/art/marker_tryptic.png",
        alt: "Three paintings of markers.",
        width: 2500,
        height: 626
    },
    {
        title: "Monsters Inc. Minimalist Poster",
        medium: "Digital Illustration",
        url: "/static/img/art/monsters_poster.png",
        alt: "A minimalist movie poster for Monsters, Inc.",
        width: 900,
        height: 1350
    },
    {
        title: "Up Minimalist Poster",
        medium: "Digital Illustration",
        url: "/static/img/art/up_poster.png",
        alt: "A minimalist movie poster for Up.",
        width: 900,
        height: 1346
    },
    {
        title: "Finding Nemo Minimalist Poster",
        medium: "Digital Illustration",
        url: "/static/img/art/nemo_poster.png",
        alt: "A minimalist movie poster for Finding Nemo.",
        width: 900,
        height: 1350
    },
];