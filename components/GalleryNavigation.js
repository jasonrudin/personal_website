import React from 'react';

export function GalleryNavigation(props) {
    function handleEvent(x) {
        props.updateGalleryObjectPosition(x);
    }

    return (
        <div className="hidden md:block">
            <a href="#" onClick={() => handleEvent(props.currentlyActive -1)} className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic">← Prev</a>
            <span className="mx-4 italic text-zinc-500">{props.currentlyActive + 1} of {props.artData.length}</span>
            <a href="#" onClick={() => handleEvent(props.currentlyActive + 1)} className="underline underline-offset-2 decoration-2 decoration-zinc-300 hover:decoration-zinc-700 text-zinc-500 hover:text-zinc-700 transition duration-75 italic">Next →</a>
        </div>
    );
}
