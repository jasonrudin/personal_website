import React from 'react';
import { GalleryObject } from './GalleryObject';

export function GalleryList(props) {
    //If you are on desktop (screen size > 768px), only render the art object in the position thats currently active.
    
    return (
        props.artData.map((image, index) => (
            <GalleryObject art={image} key={image.id} objectID = {image.id} isActiveOnDesktop={index === props.currentlyActive ? true : false} updateFullScreenArt={props.updateFullScreenArt} updateFullScreenMode = {props.updateFullScreenMode} pageType = {props.pageType} />
        ))
    );
}
