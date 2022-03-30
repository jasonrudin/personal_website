import React, { useState, useEffect } from 'react';
import { ImageWrapper } from "./ImageWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export function FullScreenGalleryImage(props) {
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
            <span className="text-white inline-block px-4 pt-4 z-30"><FontAwesomeIcon icon={faXmark} size="lg" /></span>
            <ImageWrapper img={fullScreenImage} key={fullScreenImage.id} width={fullSizeWidth} appliedCSS={appliedCSS} updateFullScreenArt={props.updateFullScreenArt} />
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