const ImageGallery = ({images}: {images: string[]}) => {
    if (images.length === 0) return null
    return (
        <div>
            {
                images.map(image => (
                    <div key={image}>
                        <img src={image} alt={image} width="200"/>
                    </div>
                ))
            }
        </div>
    );
};

export default ImageGallery;