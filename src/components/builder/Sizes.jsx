import React, { useState } from "react";
import "../../css/Sizes.css";

const Sizes = ({ selectSize }) => {

  // Size Chart
  const [sizes, setSize] = useState([
    { size: "XS", isActive: false },
    { size: "S", isActive: false },
    { size: "M", isActive: false },
    { size: "L", isActive: false },
    { size: "XL", isActive: false },
  ]);

  function activeSize(activeSize) {
    let sizeSelection = sizes.map((size) => {
      if (size.size === activeSize) {
        size.isActive = true
      } else {
        size.isActive = false
      }
      return size
    })

    setSize(sizeSelection)
  }



  return (
    <div className="sizes">
      {sizes.map(size =>
        <div key={size.size} className="button-container" style={{ backgroundColor: size.isActive ? '#00edd9' : '' }}>
          <span

            onClick={() => { 
              selectSize(size.size)
              activeSize(size.size)
            }}
            className="button-margin"
            style={{ color: size.isActive ? '#fff' : '' }}
          >
            {size.size}
          </span>
        </div>
      )
      }</div>
  );
};

export default Sizes;
