import React from 'react';
import { GalleryImage } from './GalleryImage';
import { GalleryDescription } from './GalleryDescription';

export function GalleryObject(props) {
    const hiddenOnDesktop = "mb-12 last:mb-0 md:hidden";
    const shownOnDesktop = "mb-12 last:mb-0 md:flex md:relative md:flex-col md:mb-0";
    return (
        <div className={props.isActiveOnDesktop ? shownOnDesktop : hiddenOnDesktop}>
            <div className="flex md:w-full">
                <GalleryImage imageList={props.art.imageArray} updateFullScreenArt={props.updateFullScreenArt} updateFullScreenMode = {props.updateFullScreenMode}/>
            </div>
            <GalleryDescription image={props.art} pageType = {props.pageType} />
        </div>
    );
}
