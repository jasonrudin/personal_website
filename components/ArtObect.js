import React from 'react';
import { GalleryImage } from './GalleryImage';
import { ArtDescription } from './ArtDescription';

export function ArtObect(props) {
    const hiddenOnDesktop = "mb-8 last:mb-0 md:hidden";
    const shownOnDesktop = "mb-8 last:mb-0 md:flex md:relative md:flex-col md:mb-0";

    return (
        <div className={props.isActiveOnDesktop ? shownOnDesktop : hiddenOnDesktop}>
            <div className="flex md:w-full">
                <GalleryImage imageList={props.art.imageArray} updateFullScreenArt={props.updateFullScreenArt} />
            </div>
            <ArtDescription image={props.art} />
        </div>
    );
}
