import { FullScreenGalleryImage } from '../components/FullScreenGalleryImage';
import { GalleryList } from '../components/GalleryList';
import React, { useState, useEffect } from 'react';
import { GalleryNavigation } from './GalleryNavigation';
import Link from 'next/link';

function GalleryWrapper(props) {
    const [activeGalleryObjectPosition, setActiveObjectPosition] = useState(0);
    const [fullScreenArtObjectPosition, setFullScreenArtObjectPosition] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const galleryData = props.galleryData;

    function updatePosition(x) {
        let newPosition = activeGalleryObjectPosition + x;
        if (newPosition >= galleryData.length) {
            setActiveObjectPosition(0);
        }
        else if (newPosition < 0) {
            setActiveObjectPosition(galleryData.length - 1);
        }
        else {
            setActiveObjectPosition(newPosition);
        }
    }

    function updateFullScreenArtObjectPosition(imageID) {
        setFullScreenArtObjectPosition(imageID);
    }

    function updateFullScreenMode() {
        if (isFullScreen === true) {
            setIsFullScreen(false);
        }
        else {
            setIsFullScreen(true);
        }
    }

    const hasWindow = typeof window !== 'undefined';

    useEffect(() => {
        if (hasWindow) {
            function handleKeyPress(e) {
                let imageArray = galleryData[activeGalleryObjectPosition].imageArray;
                let getImageArrayPosition = (image) => image.id === fullScreenArtObjectPosition;
                let currentImagePosition = imageArray.findIndex(getImageArrayPosition);

                if (e.key === 'ArrowRight') {
                    if (isFullScreen) {
                        //fist, get the current gallery object and active full screen image.
                        //then, see if there's room in the Object's image array to advance by one. If so, do that.
                        //if you're at the end of the array, increment the object position and reset the image position to 0.
                        if (currentImagePosition + 1 < imageArray.length) {
                            setFullScreenArtObjectPosition(fullScreenArtObjectPosition + 1);
                        }
                        else if (activeGalleryObjectPosition + 1 >= galleryData.length) {
                            setActiveObjectPosition(0);
                            setFullScreenArtObjectPosition(0);

                        }
                        else {
                            setFullScreenArtObjectPosition(fullScreenArtObjectPosition + 1);
                            updatePosition(1);
                        }
                    }
                    else {
                        updatePosition(1);
                        updateFullScreenArtObjectPosition(galleryData[activeGalleryObjectPosition].imageArray[0].id);
                        console.log(fullScreenArtObjectPosition);
                    }
                }
                if (e.key === 'ArrowLeft') {
                    if (isFullScreen) {
                        //fist, get the current gallery object and active full screen image.
                        //then, see if there's room in the Object's image array to decrement by one. If so, do that.
                        if (currentImagePosition - 1 >= 0) {
                            setFullScreenArtObjectPosition(fullScreenArtObjectPosition - 1);
                        }
                        //If you're at the beginning of the art data list, jump to the last image/object in the list.
                        else if (activeGalleryObjectPosition === 0) {
                            let newArtObject = galleryData[galleryData.length - 1];
                            setActiveObjectPosition(galleryData.length - 1);
                            setFullScreenArtObjectPosition(newArtObject.imageArray[newArtObject.imageArray.length - 1].id);

                        }
                        //if you're at the beginning of an art object but there's room to go back, just decrement the position and set the full screen object to the last in the new image array.
                        else {
                            let newArtObject = galleryData[activeGalleryObjectPosition - 1];
                            setFullScreenArtObjectPosition(newArtObject.imageArray[newArtObject.imageArray.length - 1].id);
                            updatePosition(-1);
                        }
                    }
                    else {
                        updatePosition(-1);
                        updateFullScreenArtObjectPosition(galleryData[activeGalleryObjectPosition].imageArray[0].id);
                        console.log(fullScreenArtObjectPosition);
                    }
                }
            }

            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        }
    });


    return (
        <section>
            <Link href="/">
                <a className="fixed h-10 top-0 left-0 w-full bg-white border-b-[1px] z-10 px-6 py-2 underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic md:p-0 md:h-auto md:border-0 md:relative md:w-auto md:bg-transparent md:text-xs">← Home</a>
            </Link>
            <h1 className="text-4xl mt-8 md:mt-4">{props.title}</h1>
            <GalleryNavigation updateActive={updatePosition} currentlyActive={activeGalleryObjectPosition} artData={galleryData} />
            <div className="mt-4">
                <GalleryList artData={galleryData} currentlyActive={activeGalleryObjectPosition} updateFullScreenArt={updateFullScreenArtObjectPosition} updateFullScreenMode={updateFullScreenMode} pageType={props.pageType} />
            </div>
            {isFullScreen &&
                <FullScreenGalleryImage updateFullScreenArt={updateFullScreenArtObjectPosition} updateFullScreenMode={updateFullScreenMode} fullScreenArtObjectPosition={fullScreenArtObjectPosition} artData={galleryData}></FullScreenGalleryImage>
            }
        </section>
    );
}

export default GalleryWrapper;