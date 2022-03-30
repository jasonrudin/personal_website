import Image from 'next/image'

export function ImageWrapper(props) {
    return (
        <div className={props.appliedCSS} onClick={() => props.updateFullScreenArt(props.img.id)} style={props.width}>
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