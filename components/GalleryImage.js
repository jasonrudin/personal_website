import { ImageWrapper } from "./ImageWrapper";

//Output the 'images' section (to be paired with a single description for the piece of art).
export function GalleryImage(props) {
    let width = {
        width: '100%',
    }

    let appliedCSS = 'mr-2 last:mr-0 w-full hover:cursor-pointer';

    return (
        props.imageList.map((image, index) => (
            <ImageWrapper img={image} key={image.id} appliedCSS={appliedCSS} width={width} updateFullScreenArt={props.updateFullScreenArt} updateFullScreenMode = {props.updateFullScreenMode}/>
        ))
    );
}