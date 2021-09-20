import React from "react"
import CartBadge from "../builder/CartBadge";
import OrderDetailsContainer from './OrderDetailsContainer'
import OrderFormsContainer from "./OrderFormsContainer";

const OrderInfo = () => {

  return (
    <div className="root">
      <CartBadge />
      <OrderDetailsContainer />
      <OrderFormsContainer />
    </div >
  )
}

export default OrderInfo
