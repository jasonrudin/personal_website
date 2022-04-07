import { FullScreenGalleryImage } from '../components/FullScreenGalleryImage';
import { GalleryList } from '../components/GalleryList';
import React, { useState, useEffect } from 'react';
import { GalleryNavigation } from './GalleryNavigation';
import Link from 'next/link';
import MobileFullScreenNav from './MobileFullScreenNav';

function GalleryWrapper(props) {
    const [activeGalleryObjectPosition, setActiveObjectPosition] = useState(0);
    const [fullScreenArtObjectPosition, setFullScreenArtObjectPosition] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const galleryData = props.galleryData;
    const { windowHeight, windowWidth } = useWindowDimensions();
    let isSmallWindow = windowWidth <= 768;

    function updateGalleryObjectPosition(objectID){
        if(objectID >= galleryData.length){
            setActiveObjectPosition(0);
        }
        else if (objectID < 0){
            setActiveObjectPosition(galleryData.length - 1);
        }
        else{
            setActiveObjectPosition(objectID);
        }
        
    }

    function updateGalleryImageAndObjectPositions(imageID, objectID) {
        setFullScreenArtObjectPosition(imageID);
        updateGalleryObjectPosition(objectID);
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
                        incrementFullScreenImage();
                    }
                    else {
                        updateGalleryImageAndObjectPositions(galleryData[activeGalleryObjectPosition].imageArray[0].id, activeGalleryObjectPosition+1);
                    }
                }
                if (e.key === 'ArrowLeft') {
                    if (isFullScreen) {
                        decrementFullScreenImage();
                    }
                    else {
                        updateGalleryImageAndObjectPositions(galleryData[activeGalleryObjectPosition].imageArray[0].id, activeGalleryObjectPosition-1);
                    }
                }
                if (e.key === 'Escape' || e.key === 'q') {
                    if (isFullScreen) {
                        updateFullScreenMode();
                    }
                }
            }

            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        }
    });

    function incrementFullScreenImage() {
        //fist, get the current gallery object and active full screen image.
        //then, see if there's room in the Object's image array to advance by one. If so, do that.
        //if you're at the end of the array, increment the object position and reset the image position to 0.
        let imageArray = galleryData[activeGalleryObjectPosition].imageArray;
        let getImageArrayPosition = (image) => {
            return image.id === fullScreenArtObjectPosition;
        };
        let currentImagePosition = imageArray.findIndex(getImageArrayPosition);

        //Check if the image is the last in the imageArray. If it is not, advance the specific image while keeping the gallery object the same.
        if (currentImagePosition + 1 < imageArray.length) {
            updateGalleryImageAndObjectPositions(fullScreenArtObjectPosition + 1, activeGalleryObjectPosition);
        }
        //If the image IS the last in the array, youre going to change the gallery object AND the image object. 
        else{
            //if you're at the end of the line, go back to 0 on both.
            if(activeGalleryObjectPosition + 1 >= galleryData.length){
                updateGalleryImageAndObjectPositions(0, 0);
            }
            //if there are more gallery objects to go, you want to increment both the gallery object and the image object.
            else{
                console.log(fullScreenArtObjectPosition + " " + activeGalleryObjectPosition);
                updateGalleryImageAndObjectPositions(fullScreenArtObjectPosition + 1, activeGalleryObjectPosition + 1);
            }
        }
    }

    function decrementFullScreenImage() {
        let imageArray = galleryData[activeGalleryObjectPosition].imageArray;
        let getImageArrayPosition = (image) => image.id === fullScreenArtObjectPosition;
        let currentImagePosition = imageArray.findIndex(getImageArrayPosition);

        //fist, get the current gallery object and active full screen image.
        //then, see if there's room in the Object's image array to decrement by one. If so, do that.

        if (currentImagePosition - 1 >= 0) {
            updateGalleryImageAndObjectPositions(fullScreenArtObjectPosition - 1, activeGalleryObjectPosition);
        }
        //If you're at the beginning of the art data list, jump to the last image/object in the list.
        else if (activeGalleryObjectPosition === 0) {
            let newArtObject = galleryData[galleryData.length - 1];
            updateGalleryImageAndObjectPositions(newArtObject.imageArray[newArtObject.imageArray.length - 1].id, galleryData.length - 1);

        }
        //if you're at the beginning of an art object but there's room to go back, just decrement the position and set the full screen object to the last in the new image array.
        else {
            let newArtObject = galleryData[activeGalleryObjectPosition - 1];
            updateGalleryImageAndObjectPositions(newArtObject.imageArray[newArtObject.imageArray.length - 1].id, activeGalleryObjectPosition-1);
        }
    }

    return (
        <section>
            <Link href="/">
                <a className="fixed h-10 top-0 left-0 w-full bg-white border-b-[1px] z-10 px-6 py-2 underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic md:p-0 md:h-auto md:border-0 md:relative md:w-auto md:bg-transparent md:text-xs">← Home</a>
            </Link>
            <h1 className="text-4xl mt-8 md:mt-4">{props.title}</h1>
            <GalleryNavigation updateGalleryObjectPosition={updateGalleryObjectPosition} currentlyActive={activeGalleryObjectPosition} artData={galleryData} />
            <div className="mt-4">
                <GalleryList artData={galleryData} currentlyActive={activeGalleryObjectPosition} updateFullScreenArt={updateGalleryImageAndObjectPositions} updateFullScreenMode={updateFullScreenMode} pageType={props.pageType} />
            </div>
            {isFullScreen &&
                <>
                {isSmallWindow && <MobileFullScreenNav direction = "forward" onClick = {incrementFullScreenImage}/>}
                    <FullScreenGalleryImage
                        updateFullScreenArtObjectPosition={updateGalleryImageAndObjectPositions}
                        updateFullScreenMode={updateFullScreenMode}
                        fullScreenArtObjectPosition={fullScreenArtObjectPosition}
                        galleryData={galleryData}
                        activeGalleryObjectPosition={activeGalleryObjectPosition}
                        updateGalleryObjectPosition={updateGalleryObjectPosition}
                        incrementFullScreenImage={incrementFullScreenImage}
                        decrementFullScreenImage={decrementFullScreenImage}
                    />
                    {isSmallWindow && <MobileFullScreenNav direction = "backward" onClick = {decrementFullScreenImage}/>}
                </>
            }
        </section>
    );
}

export default GalleryWrapper;

export function useWindowDimensions() {
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