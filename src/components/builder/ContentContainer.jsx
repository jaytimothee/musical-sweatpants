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

  const disabledButton = !currentAlbum || !clotheSize ? true : false;

  const sizes = [
    { size: "XS", isActive: false },
    { size: "M", isActive: false },
    { size: "L", isActive: false },
    { size: "XL", isActive: false },
  ];

  function handleClothingSize(clothingSize) {
    setClotheSize(clothingSize);
    sizes.forEach((sizeSelection) => {
      if (sizeSelection.size === clothingSize) {
        sizeSelection.isActive = true;
      }
    });
    console.log(sizes);
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

            {sizes.map((size) => (
              <Sizes
                key={size.size}
                sizesOption={size}
                isActive={size.isActive}
                selectSize={handleClothingSize}
              />
            ))}
          </div>

          <button
            disabled={disabledButton}
            className={"btn heavy-text full-width add-to-cart"}
            onClick={() => addToCart(currentAlbum, "XS", 60, "Sweatpants")}
          >
            <span>Add to Cart - $60</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
