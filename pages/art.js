import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Art() {
    return (
        <div className="font-ss max-w-4xl mx-auto min-h-screen flex flex-col justify-center p-6">
            <Head>
                <title>Art</title>
                <meta name="description" content="Jason Rudin's corner of the internet." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="">
                <Link href="/"><a className="text-xs underline text-zinc-500">← Home</a></Link>
                <h1 className="text-2xl mt-2">Art</h1>
            </header>
            <section className="">
                {artArray.map((image, index) => (
                    <div className="mb-12 last:mb-0 md:flex">
                        <div className="flex md:w-5/6">
                            {urlArrayMapper(image.imageArray)}
                        </div>
                        <div className="md:w-1/6 md:px-2">
                            <h3 className="text-xl">{image.title}</h3>
                            <p className="">{image.medium}</p>
                        </div>
                    </div>
                ))}
            </section>


        </div>
    )
}

//Output the 'images' section (to be paired with a single description for the piece of art).
function urlArrayMapper(imageArray) {
    return (
        imageArray.map((img, index) => (
            <div className="w-full mr-2 last:mr-0" key={img.id}>
                <Image
                    src={img.url}
                    width={img.width}
                    height={img.height}
                    layout="responsive"
                    className= ""
                    quality={100}
                    alt={img.alt}
                />
            </div>
        ))
    );
}

const artArray = [
    {
        id: 1,
        title: "Strawberries",
        medium: "Colored Pencil",
        imageArray: [
            {
                url: "/static/img/art/strawberries.png",
                width: 361,
                height: 265,
                alt: "Strawberries on a white background.",
                id: 1
            }
        ]
    },
    {
        id: 2,
        title: "Blocks",
        medium: "Oil on Canvas",
        imageArray: [
            {
                url: "/static/img/art/abstract_blocks.png",
                width: 1000,
                height: 503,
                alt: "Blocks painted from above.",
                id: 1
            }
        ]
    },
    {
        id: 3,
        title: "Abstract Blue",
        medium: "Oil on Canvas",
        imageArray: [
            {
                url: "/static/img/art/abstract_blue.png",
                width: 1000,
                height: 666,
                alt: "Gradations of blue and white.",
                id: 1
            }
        ]
    },
    {
        id: 4,
        title: "Ball and Glove",
        medium: "Colored Pencil",
        imageArray: [
            {
                url: "/static/img/art/ball_and_glove.png",
                width: 800,
                height: 637,
                alt: "A baseball glove and ball.",
                id: 1
            }
        ]
    },
    {
        id: 5,
        title: "Florida Bridges",
        medium: "Oil on Canvas",
        imageArray: [
            {
                url: "/static/img/art/bridges.png",
                width: 800,
                height: 629,
                alt: "Two bridges in the Florida Keys.",
                id: 1
            }
        ]
    },
    {
        id: 6,
        title: "Flowers",
        medium: "Oil on Canvas",
        imageArray: [
            {
                url: "/static/img/art/flowers.png",
                width: 700,
                height: 870,
                alt: "White flowers in a glass vase.",
                id: 1
            }
        ]
    },
    {
        id: 7,
        title: "Code Monkeys",
        medium: "3D Modeling",
        imageArray: [
            {
                url: "/static/img/art/code monkeys_1.png",
                width: 800,
                height: 497,
                alt: "A late night of code monkey coding.",
                id: 1
            },
            {
                url: "/static/img/art/code monkeys_2.png",
                width: 800,
                height: 600,
                alt: "Close-up of a code monkey desk.",
                id: 2
            }
        ]
    },
    {
        id: 8,
        title: "Flowers",
        medium: "Oil on Canvas",
        imageArray: [
            {
                url: "/static/img/art/flowers.png",
                width: 700,
                height: 870,
                alt: "White flowers in a glass vase.",
                id: 1
            }
        ]
    },
    {
        id: 9,
        title: "Kilns",
        medium: "Charcoal on Paper",
        imageArray: [
            {
                url: "/static/img/art/kilns.png",
                width: 1362,
                height: 1790,
                alt: "Sketch drawing of pottery kilns.",
                id: 1
            }
        ]
    },

    {
        id: 10,
        title: "Pixar Movie Posters",
        medium: "Digital Illustration",
        imageArray: [
            {
                url: "/static/img/art/nemo_poster.png",
                width: 900,
                height: 1350,
                alt: "Finding Nemo minimalist movie poster.",
                id: 1
            },
            {
                url: "/static/img/art/up_poster.png",
                width: 900,
                height: 1350,
                alt: "Up minimalist movie poster.",
                id: 2
            },
            {
                url: "/static/img/art/monsters_poster.png",
                width: 900,
                height: 1350,
                alt: "Monsters, Inc. minimalist movie poster.",
                id: 3
            }
        ]
    },
];