import React from "react";
// Rendering individual images
const Image = ({ image }) => {
    return (
        <div className='file-item px-4 m-auto'>
            <img
                alt={`img - ${image.id}`}
                src={image.src}
                className='file-img rounded-3xl'
                width={200}
            />
        </div>
    );
};
// ImageList Component//
const ImageGrid = ({ images }) => {
    // render each image by calling Image component
    const renderImage = (image, index) => {
        return <Image image={image} key={`${image.id}-image`} />;
    };
    // Return the list of files//
    return <span className='nue flex'>{images.map(renderImage)}</span>;
};
export default ImageGrid;
