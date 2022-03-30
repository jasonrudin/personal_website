import React from 'react';
import { GalleryObject } from './GalleryObject';

export function GalleryList(props) {
    //If you are on desktop (screen size > 768px), only render the art object in the position thats currently active.
    return (
        props.artData.map((image, index) => (
            <GalleryObject art={image} key={image.id} isActiveOnDesktop={index == props.currentlyActive ? true : false} updateFullScreenArt={props.updateFullScreenArt} pageType = {props.pageType} />
        ))
    );
}
