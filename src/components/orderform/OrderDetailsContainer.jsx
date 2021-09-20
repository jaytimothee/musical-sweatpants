import React from "react";
import "../../css/OrderDetailsContainer.css";
import LineItem from "../LineItem";
import { useCartContext } from "../../providers/CartProvider";

const OrderDetailsContainer = () => {
  const { cart, subtotal, SHIPPING, TAXES, total } = useCartContext();

  return (
    <div className="order-details-container">
      <div className={"order-details-wrapper"}>
        {cart?.map((item, index) => (
          <div key={index} className={"line-item-padding"}>
            <LineItem
              album={item.album}
              price={item.price}
              size={item.size}
              type={item.type}
            />
          </div>
        ))
        }

        <hr className="divider" />

        <div className="flex-end">
          <div className="order-details">
            <div className="order-details-item" >
              <h5 className="light-text">
                Subtotal
            </h5>
              <h3 className="light-text">
                $ {`${subtotal}`}
              </h3>
            </div>
            <div className="order-details-item">
              <h5 className="light-text">
                Shipping
            </h5>
              <h3 className="light-text">
                $ {`${SHIPPING}`}
              </h3>
            </div>
            <div className="order-details-item">
              <h5 className="light-text">
                Taxes {`(${TAXES * 100}%)`}
              </h5>
              <h3 className="light-text">
                $ {`${TAXES * subtotal}`}
              </h3>
            </div>
            <hr className="divider" />
            <div className="order-details-item">
              <h5 className="light-text">
                Total
              </h5>
              <h3 className="light-text">
                {total}
              </h3>
            </div>
          </div>

        </div>

      </div>
    </div >
  );
};

export default OrderDetailsContainer;
