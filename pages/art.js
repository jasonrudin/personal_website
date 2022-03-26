import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';

export default function Art() {
    const [activeObjectPosition, setActiveObjectPosition] = useState(0);
    const [fullScreenArtObjectPosition, setFullScreenArtObject] = useState(null);
    const artData = artArray;

    const updatePosition = (x) => {
        let newPosition = activeObjectPosition + x;
        if (newPosition >= artData.length) {
            setActiveObjectPosition(0);
        }
        else if (newPosition < 0) {
            setActiveObjectPosition(artData.length - 1);
        }
        else {
            setActiveObjectPosition(newPosition);
        }
    }

    const updateFullScreenArt = function (x) {
        setFullScreenArtObject(x);
    }

    const hasWindow = typeof window !== 'undefined';


    if (hasWindow) {
        useEffect(() => {
            if (hasWindow) {
                function handleKeyPress(e) {
                    if (e.key === 'ArrowRight') {
                        updatePosition(1);
                    }
                    if (e.key === 'ArrowLeft') {
                        updatePosition(-1);
                    }
                }

                window.addEventListener('keydown', handleKeyPress);
                return () => window.removeEventListener('keydown', handleKeyPress);
            }
        });
    }

    return (
        <div className="text-zinc-700 font-ss pt-20 max-w-3xl mx-auto flex flex-col justify-center p-6 md:pb-0">
            <Head>
                <title>Art</title>
                <meta name="description" content="Jason Rudin's corner of the internet." />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <Script src="https://kit.fontawesome.com/4ff0ff850c.js" crossorigin="anonymous" />
            <header className="relative">
                <Link href="/">
                    <a className="fixed h-10 top-0 left-0 w-full bg-white border-b-[1px] z-10 px-6 py-2 underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic md:p-0 md:h-auto md:border-0 md:relative md:w-auto md:bg-transparent md:text-xs">← Home</a>
                </Link>
                <h1 className="text-4xl mt-8 md:mt-4">Art</h1>
                <ArtObjectNavigation updateActive={updatePosition} currentlyActive={activeObjectPosition} artData={artData} />
            </header>
            <section className="mt-4">
                <ArtList artData={artData} currentlyActive={activeObjectPosition} updateFullScreenArt={updateFullScreenArt} />
                {fullScreenArtObjectPosition != null &&
                    <FullScreenArtObject updateFullScreenArt={updateFullScreenArt} fullScreenArtObjectPosition={fullScreenArtObjectPosition} artData={artData}></FullScreenArtObject>
                }
            </section>

        </div>
    )
}

function ArtObjectNavigation(props) {
    function handleEvent(x) {
        props.updateActive(x);
    }

    return (
        <div className="hidden md:block">
            <a href="#" onClick={() => handleEvent(-1)} className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic">← Prev</a>
            <span className="mx-4 italic text-zinc-500">{props.currentlyActive + 1} of {props.artData.length}</span>
            <a href="#" onClick={() => handleEvent(1)} className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic">Next →</a>
        </div>
    )
}

function ArtList(props) {
    //If you are on desktop (screen size > 768px), only render the art object in the position thats currently active.
    return (
        props.artData.map((image, index) => (
            <ArtObect art={image} key={image.id} isActiveOnDesktop={index == props.currentlyActive ? true : false} updateFullScreenArt={props.updateFullScreenArt} />
        ))
    );
}

function ArtObect(props) {
    const hiddenOnDesktop = "mb-8 last:mb-0 md:hidden"
    const shownOnDesktop = "mb-8 last:mb-0 md:flex md:relative md:flex-col md:mb-0"

    return (
        <div className={props.isActiveOnDesktop ? shownOnDesktop : hiddenOnDesktop} >
            <div className="flex md:w-full">
                <ArtImages imageList={props.art.imageArray} updateFullScreenArt={props.updateFullScreenArt} />
            </div>
            <ArtDescription image={props.art} />
        </div>
    );
}

function ArtDescription(props) {
    return (
        <div className="mt-2 leading-tight md:pb-8 lg:w-2/6 lg:px-4 lg:mt-0 lg:absolute lg:-right-[33.33%]">
            <h3 className="text-xl">{props.image.title}</h3>
            <p className="text-zinc-500">{props.image.medium}</p>
        </div>
    );
}

//Output the 'images' section (to be paired with a single description for the piece of art).
function ArtImages(props) {
    let width = {
        width: '100%',
    }

    let appliedCSS = 'mr-2 last:mr-0 w-full hover:cursor-pointer';

    return (
        props.imageList.map((image, index) => (
            <ArtImage img={image} key={image.id} appliedCSS={appliedCSS} width={width} updateFullScreenArt={props.updateFullScreenArt} />
        ))
    );
}

function ArtImage(props) {
    return (
        <div className={props.appliedCSS} onClick={() => props.updateFullScreenArt(props.img.id)} style={props.width}>
            <Image
                src={props.img.url}
                width={props.img.width}
                height={props.img.height}
                alt={props.img.alt}
                layout="responsive"
                className=""
                quality={100}
            />
        </div>
    );
}

function FullScreenArtObject(props) {
    //figure out which image to render 
    let fullScreenImage = null;
    for (let i = 0; i < props.artData.length; i++) {
        for (let j = 0; j < props.artData[i].imageArray.length; j++) {
            if (props.artData[i].imageArray[j].id === props.fullScreenArtObjectPosition) {
                fullScreenImage = props.artData[i].imageArray[j];
            }
        }
    }

    //figure out the right width to render correctly
    const { windowHeight, windowWidth } = useWindowDimensions();
    let fullSizeImageWidth = 500;
    const hasWindow = typeof window !== 'undefined';
    if (windowHeight >= windowWidth || windowWidth < fullScreenImage.width) {
        fullSizeImageWidth = windowWidth;
    }
    else {
        fullSizeImageWidth = Math.floor((windowHeight / fullScreenImage.height) * fullScreenImage.width);
    }
    let fullSizeWidth = {
        width: fullSizeImageWidth + 'px',
    }

    //CSS to Apply
    //I'm cheating a little bit here. The 'style' of the width of what is being rendered doesn't update in the case where the browser still has h < w, but the window is narrower than the image. I fixed it by adding a max width to the css, but I think the right way to do this is to update the style on browser resize events. Because right now I'm not re-calling the full size adjustment ever (the image has already been rendered), or at least until we go into mobile mode in which case it doesn't matter. The image dynmically resizes fine once its already at full size because <Image> takes care of that responsiveness.
    let appliedCSS = 'fixed bg-zinc-900 top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2 z-20 mr-2 last:mr-0 max-w-full';


    return (
        <div className='fixed z-20 inset-0 bg-zinc-900 hover:cursor-pointer' onClick={() => props.updateFullScreenArt(null)}>
            <span className="text-white inline-block px-4 pt-4"><FontAwesomeIcon icon={faXmark} size="lg" /></span>
            <ArtImage img={fullScreenImage} key={fullScreenImage.id} width={fullSizeWidth} appliedCSS={appliedCSS} updateFullScreenArt={props.updateFullScreenArt} />
        </div>
    )
}

function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const windowWidth = hasWindow ? window.innerWidth : null;
        const windowHeight = hasWindow ? window.innerHeight : null;
        return {
            windowWidth,
            windowHeight,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
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
                id: 2
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
                id: 3
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
                id: 4
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
                id: 5
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
                id: 6
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
                id: 7
            },
            {
                url: "/static/img/art/code monkeys_2.png",
                width: 800,
                height: 497,
                alt: "Close-up of a code monkey desk.",
                id: 8
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
                id: 9
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
                id: 10
            },
            {
                url: "/static/img/art/up_poster.png",
                width: 900,
                height: 1350,
                alt: "Up minimalist movie poster.",
                id: 11
            },
            {
                url: "/static/img/art/monsters_poster.png",
                width: 900,
                height: 1350,
                alt: "Monsters, Inc. minimalist movie poster.",
                id: 12
            }
        ]
    },
];