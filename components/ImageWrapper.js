import Image from 'next/image'

export function ImageWrapper(props) {
    return (
        <div className={props.appliedCSS}
            onClick={function (event) {
                props.updateFullScreenArt(props.img.id, props.objectID);
                props.updateFullScreenMode();
            }}
            style={props.width}>
            <Image
                src={props.img.url}
                width={props.img.width}
                height={props.img.height}
                alt={props.img.alt}
                layout="responsive"
                className=""
                quality={100}
            />
        </div>
    );
}