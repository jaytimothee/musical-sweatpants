import React, { useContext, useEffect, createContext } from 'react';
import { useState } from 'react';


export const CartContext = createContext(null);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, ...initOptions }) => {

  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0)
  const SHIPPING = 5
  const TAXES = .1
  const addToCart = (album, size, price, type) => {

    const newItem = {
      album,
      price,
      size,
      type
    };
    setCart(oldCart => [...oldCart, newItem]);
  };


  useEffect(() => {
    // I'm sure this can be done better.  useReducer?
    let newSubTotal = 0;
    cart?.forEach(element => {
      newSubTotal = newSubTotal + element.price;
    });
    setSubtotal(newSubTotal);

    let newTotal = newSubTotal + (newSubTotal * TAXES) + SHIPPING
    setTotal(newTotal)
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        setCart,
        subtotal,
        total,
        SHIPPING,
        TAXES
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
