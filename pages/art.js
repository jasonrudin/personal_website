import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function Art() {
    const [activeObjectPosition, setActiveObjectPosition] = useState(0);

    const updatePosition = (x) => {
        setActiveObjectPosition(activeObjectPosition + x);
    }

    return (
        <div className="text-zinc-700 font-ss pt-20 max-w-4xl mx-auto flex flex-col justify-center p-6">
            <Head>
                <title>Art</title>
                <meta name="description" content="Jason Rudin's corner of the internet." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                <Link href="/">
                <a className=" fixed h-10 top-0 left-0 w-full bg-white border-b-[1px] z-10 px-6 py-3 text-xs underline text-zinc-500">← Home</a>
                </Link>
          
            <h1 className="text-4xl mt-8">Art</h1>
            <ArtObjectNavigation updateActive = {updatePosition} currentlyActive = {activeObjectPosition}/>
            <section className="mt-4">
                <ArtList artData={artArray} currentlyActive={activeObjectPosition} />
            </section>
            
        </div>
    )
}

function ArtObjectNavigation(props) {
    function handleEvent(x){
        props.updateActive(x);
    }

    function handleKeyPress(key){
        var k = key.key;
        console.log("hello");
    }

    return (
        <div className = "hidden md:block">
            <a href = "#" onClick = {() => handleEvent(-1)} className = "underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic">← Prev</a>
            <span className = "mx-4 italic text-zinc-500">{props.currentlyActive + 1} of 500</span>
            <a href = "#" onClick = {() => handleEvent(1) } className = "underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic">Next →</a>
        </div>
    )
}

function ArtList(props) {
    //If you are on desktop (screen size > 768px), only render the art object in the position thats currently active.
    return (
        props.artData.map((image, index) => (
            <ArtObect art={image} key={image.id} isActiveOnDesktop={index == props.currentlyActive ? true : false} />
        ))
    );
}

function ArtObect(props) {
    const hiddenOnDesktop = "mb-8 last:mb-0 md:hidden"
    const shownOnDesktop = "mb-8 last:mb-0 md:flex"

    return (
        <div className={props.isActiveOnDesktop ? shownOnDesktop : hiddenOnDesktop} >
            <div className="flex md:w-5/6">
                <ArtImages imageList={props.art.imageArray} />
            </div>
            <ArtDescription image={props.art} />
        </div>
    );
}

function ArtDescription(props) {
    return (
        <div className="mt-2 leading-tight md:w-1/6 md:px-4 md:mt-0">
            <h3 className="text-xl">{props.image.title}</h3>
            <p className="text-zinc-500">{props.image.medium}</p>
        </div>
    );
}

//Output the 'images' section (to be paired with a single description for the piece of art).
function ArtImages(props) {
    return (
        props.imageList.map((image, index) => (
            <ArtImage img={image} key={image.id} />
        ))
    );
}


class ArtImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFullScreen: false
        };
    }

    normalSize = "w-full mr-2 last:mr-0";

    updateImageSize() {
        if (this.state.isFullScreen) {
            this.setState({ isFullScreen: false });
        }
        else {
            this.setState({ isFullScreen: true });
        }
        console.log(this.state.isFullScreen);
    }

    render() {
        return (
            <div className={this.normalSize} onClick={() => this.updateImageSize()}>
                <Image
                    src={this.props.img.url}
                    width={this.props.img.width}
                    height={this.props.img.height}
                    alt={this.props.img.alt}
                    layout="responsive"
                    className=""
                    quality={100}
                />
            </div>
        );
    }
}

const testArray = [
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
    }
]

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
        id: 9,
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