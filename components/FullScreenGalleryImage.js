import React, { useState, useEffect } from 'react';
import { ImageWrapper } from "./ImageWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useWindowDimensions } from './GalleryWrapper';

export function FullScreenGalleryImage(props) {
    //figure out which image to render 
    let fullScreenImage = null;
    for (let i = 0; i < props.galleryData.length; i++) {
        for (let j = 0; j < props.galleryData[i].imageArray.length; j++) {
            if (props.galleryData[i].imageArray[j].id === props.fullScreenArtObjectPosition) {
                fullScreenImage = props.galleryData[i].imageArray[j];
            }
        }
    }

    //figure out the right width to render correctly
    const { windowHeight, windowWidth } = useWindowDimensions();
    let fullSizeImageWidth = 500;
    const hasWindow = typeof window !== 'undefined';


    fullSizeImageWidth = Math.floor((windowHeight / fullScreenImage.height) * fullScreenImage.width);

    let fullSizeWidth = {
        width: fullSizeImageWidth + 'px',
    }

    //CSS to Apply
    //I'm cheating a little bit here. The 'style' of the width of what is being rendered doesn't update in the case where the browser still has h < w, but the window is narrower than the image. I fixed it by adding a max width to the css, but I think the right way to do this is to update the style on browser resize events. Because right now I'm not re-calling the full size adjustment ever (the image has already been rendered), or at least until we go into mobile mode in which case it doesn't matter. The image dynmically resizes fine once its already at full size because <Image> takes care of that responsiveness.
    let appliedCSS = 'fixed bg-zinc-900 top-2/4 -translate-y-1/2 left-2/4 -translate-x-1/2 mr-2 last:mr-0 max-w-full';

    return (
        <>
            <span className="text-white inline-block px-4 pt-4 fixed top-0 left-0 z-30 drop-shadow hover:cursor-pointer"
                onClick={() => {
                    props.updateFullScreenMode();
                    props.updateFullScreenArtObjectPosition(null);
                }}
            ><FontAwesomeIcon icon={faXmark} size="lg" /></span>
            <div className='fixed z-10 inset-0 bg-zinc-900 hover:cursor-pointer'
                onClick={
                    //TO DO: REFACTOR ADVANCE/DECREMENT FUNCTIONS IN GALLERY WRAPPER, MOVE TO SEPARETE FILE, IMPORT INTO THIS FILE, AND PLOP IT IN.
                    function (e) {
                        let imageArray = props.galleryData[props.activeGalleryObjectPosition].imageArray;
                        let getImageArrayPosition = (image) => image.id === props.fullScreenArtObjectPosition;
                        let currentImagePosition = imageArray.findIndex(getImageArrayPosition);
                        if (e.clientX < windowWidth / 6 && windowWidth < 768) {
                            console.log('decrement');
                            props.decrementFullScreenImage();
                        }
                        else if (e.clientX > windowWidth * 5 / 6 && windowWidth < 768) {
                            if (currentImagePosition + 1 < imageArray.length) {
                                props.updateFullScreenArtObjectPosition(props.fullScreenArtObjectPosition + 1);
                            }
                            else if (props.activeGalleryObjectPosition + 1 >= props.galleryData.length) {
                                props.setActiveObjectPosition(0);
                                props.updateFullScreenArtObjectPosition(0);

                            }
                            else {
                                props.updateFullScreenArtObjectPosition(props.fullScreenArtObjectPosition + 1);
                                props.updatePosition(1);
                            }
                        }
                        else {
                            props.updateFullScreenMode();
                            props.updateFullScreenArtObjectPosition(null);
                        }
                    }}>
                <ImageWrapper
                    img={fullScreenImage}
                    key={fullScreenImage.id}
                    width={fullSizeWidth}
                    appliedCSS={appliedCSS}
                    updateFullScreenArt={props.updateFullScreenArtObjectPosition}
                    updateFullScreenMode={props.updateFullScreenMode}
                />
            </div>
        </>
    )
}