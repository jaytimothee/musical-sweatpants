import React from "react";
import { useHistory } from "react-router-dom";
import FormInput from "./FormInput";
import { useOrderFormContext } from "../../providers/OrderFormProvider";

const Payment = () => {
  const { paymentData, setPaymentData } = useOrderFormContext();
  const history = useHistory();

  return (
    <div className="margin-10">

      <h1 className="heavy-text">Billing Infomation</h1>

      <h3 className="feature-title light-text">
        Shipping Address
      </h3>

      <FormInput
        formData={paymentData}
        inputData={["shipping"]}
        setInputData={setPaymentData}
        placeholder={["Shipping Address"]}
      />

      <div className="content-margin">
        <h3 className="feature-title light-text">
          Billing Address
        </h3>
        <FormInput
          formData={paymentData}
          inputData={["billing"]}
          setInputData={setPaymentData}
          placeholder={["Billing Address"]}
        />
      </div>

      <FormInput
        formData={paymentData}
        inputData={["cardnumber"]}
        setInputData={setPaymentData}
        placeholder={["Carn number"]}
      />
      <FormInput
        formData={paymentData}
        inputData={["nameoncard"]}
        setInputData={setPaymentData}
        placeholder={["Name on card"]}
      />
      <FormInput
        formData={paymentData}
        inputData={["expiration"]}
        setInputData={setPaymentData}
        placeholder={["Expiration (MM/YY), Security code"]}
      />


      <button
        onClick={() => history.push("/order-complete")}
        className="btn heavy-text margin-buffer"
      >
        <span>
          Pay Now
        </span>
      </button>
    </div>
  );
};

export default Payment;
