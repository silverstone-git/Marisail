import { useState } from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery-container">
      <div className="main-image-section">
        <img src={selectedImage} alt="Main" className="main-image" />
      </div>
      <div className="thumbnail-section">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.string.isRequired,
};

export default ImageGallery;
