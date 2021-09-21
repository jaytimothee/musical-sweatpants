import React, { useState } from "react";
import AlbumSearch from "./AlbumSearch";
import Sizes from "./Sizes";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
import "../../css/ContentContainer.css";
import { useCartContext } from "../../providers/CartProvider";

const ContentContainer = () => {
  const [clotheSize, setClotheSize] = useState(null);
  const { currentAlbum } = useCurrentAlbumContext();
  const { addToCart } = useCartContext();

  const price ={
    'XS': 60,
    "S": 80,
    "M": 100,
    "L": 120,
    "XL": 140
  };
  const type = 'Sweatpants'

  const disabledButton = !currentAlbum || !clotheSize ? true : false;



  function handleClothingSize(clothingSize) {
    setClotheSize(clothingSize);
  }


  return (
    <div className="content-container">
      <div className="content-padding">
        <h1 className="content-title heavy-text">Musical Sweatpants</h1>
        <h3 className="content-margin content-description light-text">
          Ever wanted your favorite album printed on a pair of sweatpants? No?
          Well, with Musical Sweatpants, you can do that anyway.
        </h3>
        <div className="content-builder-wrapper">
          <div className="content-margin">
            <AlbumSearch />
          </div>

          <div className="content-margin">
            <h3 className="feature-title light-text">Size</h3>

            <Sizes
              selectSize={handleClothingSize}
            />
          </div>

          <button
            disabled={disabledButton}
            className={"btn heavy-text full-width add-to-cart"}
            onClick={() => addToCart(currentAlbum, clotheSize, price[clotheSize], type)}
          >
            <span>Add to Cart - {price[clotheSize]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
