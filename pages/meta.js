import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React, { useState, useEffect } from 'react';
import { FullScreenGalleryImage } from '../components/FullScreenGalleryImage';
import { ArtList } from '../components/ArtList';
import { GalleryNavigation } from '../components/GalleryNavigation';
import { projectDataArray } from '../components/projectData';

export default function MetaProjects() {
    const [activeObjectPosition, setActiveObjectPosition] = useState(0);
    const [fullScreenArtObjectPosition, setFullScreenArtObject] = useState(null);
    const projectData = projectDataArray;

    function updatePosition(x) {
        let newPosition = activeObjectPosition + x;
        if (newPosition >= projectData.length) {
            setActiveObjectPosition(0);
        }
        else if (newPosition < 0) {
            setActiveObjectPosition(projectData.length - 1);
        }
        else {
            setActiveObjectPosition(newPosition);
        }
    }

    const updateFullScreenArt = function (x) {
        setFullScreenArtObject(x);
    }

    const hasWindow = typeof window !== 'undefined';


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
                <h1 className="text-4xl mt-8 md:mt-4">Meta</h1>
                <GalleryNavigation updateActive={updatePosition} currentlyActive={activeObjectPosition} artData={projectData} />
            </header>
            <section className="mt-4">
                <ArtList artData={projectData} currentlyActive={activeObjectPosition} updateFullScreenArt={updateFullScreenArt} />
                {fullScreenArtObjectPosition != null &&
                    <FullScreenGalleryImage updateFullScreenArt={updateFullScreenArt} fullScreenArtObjectPosition={fullScreenArtObjectPosition} artData={projectData}></FullScreenGalleryImage>
                }
            </section>

        </div>
    )
}

