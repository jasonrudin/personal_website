import React from 'react';

export function GalleryDescription(props) {
    console.log('here');
    if(props.pageType === "art"){
    return (
            <div className="mt-2 leading-tight md:pb-8 lg:w-2/6 lg:px-4 lg:mt-0 lg:absolute lg:-right-[33.33%]">
                <h3 className="text-xl">{props.image.title}</h3>
                <p className="text-zinc-500">{props.image.medium}</p>
            </div>
    );
    }
    else{
        return (
            <div className="mt-2 leading-tight md:pb-8 lg:w-2/6 lg:px-4 lg:mt-0 lg:absolute lg:-right-[33.33%]">
                <h3 className="text-xl">{props.image.title}</h3>
                <p className="text-zinc-500" >Built on: {props.image.medium}</p>
                <p className="text-zinc-500 mb-4">Designed by: {props.image.designerAttribution}</p>
                <p className="text-zinc-700">{props.image.description}</p>
            </div>
    );
    }
}
