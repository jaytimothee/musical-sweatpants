import React from 'react';
import { useCartContext } from "../../providers/CartProvider";
import sweatpants from '../../assets/sweatpants.png'
import "../../css/ImageContainer.css";

const ImageContainer = () => {
const {viewItem} = useCartContext()
if(viewItem){
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img className="flex-image" src={sweatpants} alt="sweatpants" />
        <div className="album-container">
        <img className="flex-image2" src={viewItem.artworkUrl60} alt="album-cover"/>
        <span className="artist">{viewItem.artistName}</span>
        </div>
      </div>
    </div >
  );}
  return <></>
};

export default ImageContainer;
