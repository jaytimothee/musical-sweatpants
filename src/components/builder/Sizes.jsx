import React from "react";
import "../../css/Sizes.css";

const Sizes = ({ selectSize, sizesOption, isActive }) => {
  return (
    <div className="button-container">
      <span
        onClick={() => selectSize(sizesOption.size)}
        className="button-margin"
      >
        {sizesOption.size}
        {isActive}
      </span>
    </div>
  );
};

export default Sizes;
