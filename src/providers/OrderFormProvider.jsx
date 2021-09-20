import React, { useContext, createContext, useState } from 'react';
import { addressData } from '../helpers/data';
import { paymentFormData } from '../helpers/data';

export const OrderFormContext = createContext(null);
export const useOrderFormContext = () => useContext(OrderFormContext);

export const OrderFormProvider = ({ children }) => {

  const [shippingData, setShippingData] = useState(addressData);
  const [billingData, setBillingData] = useState(addressData);
  const [paymentData, setPaymentData] = useState(paymentFormData);

  return (
    <OrderFormContext.Provider
      value={
        {
          shippingData,
          setShippingData,
          billingData,
          setBillingData,
          paymentData,
          setPaymentData
        }
      }>
      {children}
    </OrderFormContext.Provider>
  );
};

export default OrderFormProvider;
