import React, { useState, useRef } from "react";
import "../../css/CartBadge.css";
import "../../css/CartBadge.css";
import { useCartContext } from "../../providers/CartProvider";
import LineItem from "../LineItem";
import ClickAway from '../../helpers/ClickAway';
import { useHistory } from "react-router-dom";

const CartBadge = () => {
  const { cart } = useCartContext();
  const [showCartQuickView, setShowCartQuickView] = useState(false);
  const cartBadge = useRef(null);

  ClickAway(cartBadge, setShowCartQuickView);

  const toggle = () => {
    setShowCartQuickView(!showCartQuickView);
  };

  return (
    <div ref={cartBadge}>
      <div
        id="cart-badge"
        className="box-shadow"
        onClick={toggle}
      >
        <p>
          {cart?.length > 0 && cart.length}
        </p>
      </div>
      {showCartQuickView &&
        <CartQuickView />
      }
    </div>
  );
};

const CartItemRemoval = (cartItemIndex) => {
  const { cart, setCart } = useCartContext();

  const removeCartItem = () => {
    const dupedCart = [...cart];
    dupedCart.splice(cartItemIndex, 1);
    setCart(dupedCart);
  };

  return (
    <div className="flex vertical-flex" onClick={removeCartItem}>
      <i className="fa fa-close" />
    </div>
  );
};

const CartQuickView = () => {
  const { cart, subtotal } = useCartContext();
  const history = useHistory();

  return (
    <div id="cart-quick-view" className="box-shadow">
      <h4 className="heavy-text your-cart">
        Your Cart
      </h4>
      <div className="line-items">
        {cart?.map((item, index) => (
          <div key={index} className={"flex"}>
            <CartItemRemoval cartItemIndex={index} />
            <LineItem
              album={item.album}
              price={item.price}
              size={item.size}
              type={item.type}
            />
          </div>
        ))}

      </div>
      <div className="line-item-container quick-cart-subtotal">
        <p className="light-text">
          Sub Total
        </p>
        <h5 className="light-text subtotal">
          ${subtotal}
        </h5>
      </div>

      <button
        onClick={() => history.push("/order-info/shipping")}
        className="btn heavy-text margin-10 full-width"
      >
        <span>
          Check Out
        </span>
      </button>
    </div >
  );
};

export default CartBadge;


