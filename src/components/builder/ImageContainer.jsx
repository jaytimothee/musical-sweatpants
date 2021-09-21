import React from 'react';
import sweatpants from '../../assets/sweatpants.png'
import "../../css/ImageContainer.css";

const ImageContainer = () => {

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img className="flex-image" src={sweatpants} alt="sweatpants" />
      </div>
    </div >
  );
};

export default ImageContainer;
