import React from 'react';
import sweatpants from '../../assets/sweatpants.png'
import "../../css/ImageContainer.css";

const ImageContainer = () => {

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img className="flex-image" src={sweatpants} alt="sweatpants" />
        <img className="flex-image2" src="https://www.vhv.rs/dpng/d/420-4202050_pixel-art-shovel-knight-hd-png-download.png" />
      </div>
    </div >
  );
};

export default ImageContainer;
