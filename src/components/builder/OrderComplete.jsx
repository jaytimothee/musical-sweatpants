import React from "react";
import { useCartContext } from "../../providers/CartProvider";
import { useCurrentAlbumContext } from "../../providers/CurrentAlbumProvider";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  const { cart, setCart } = useCartContext();
  const { setCurrentAlbum } = useCurrentAlbumContext();

  return (
    <div className={"center-flex full-height"} >
      <div>

        <div className={"center-flex"}>
          {cart?.map((cartItem, index) => {
            return (
              <img
                alt="album-artwork"
                key={index}
                className="album-artwork"
                height={"200px"}
                src={`${cartItem.album?.artworkUrl100}`}
              />
            );
          })}
        </div>

        <h1 className="heavy-text text-centered">Order Received</h1>
        <h3 className="light-text text-centered">Your Musical Sweatpants will be on their way shortly!</h3>

        <div className={"center-flex"}>
          <Link
            onClick={() => { setCart([]); setCurrentAlbum(null); }}
            to="/"
            className="btn heavy-text full-width link margin-buffer"
          >
            <span>
              Start Over
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
