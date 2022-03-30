import React from 'react';
import { ArtObect } from './ArtObect';

export function ArtList(props) {
    //If you are on desktop (screen size > 768px), only render the art object in the position thats currently active.
    return (
        props.artData.map((image, index) => (
            <ArtObect art={image} key={image.id} isActiveOnDesktop={index == props.currentlyActive ? true : false} updateFullScreenArt={props.updateFullScreenArt} />
        ))
    );
}
