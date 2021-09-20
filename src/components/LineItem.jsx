import React from "react";

const LineItem = ({ album, price, size, type }) => {

  return (
    <div className="line-item-container full-width">
      <div className="flex vertical-flex">
        <img
          alt="album-artwork"
          src={`${album.artworkUrl100}`}
          className={"album-artwork margin-right-10"}
          height="41px"
          width="41px"
        />
      </div>
      <div style={{ flex: 1 }}>
        <h5 className="light-text">
          {type} - {size}
        </h5>
        <p className="light-text">
          {album.collectionName} - {album.artistName}
        </p>
      </div>
      <div className="flex vertical-flex">
        <h5 className="light-text">
          ${price}
        </h5>
      </div>

    </div >
  );
};

export default LineItem;
