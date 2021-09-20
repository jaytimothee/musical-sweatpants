import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormInput from "./FormInput";
import "../../css/OrderFormsContainer.css";
import { useOrderFormContext } from "../../providers/OrderFormProvider";

const Billing = () => {
  const [checkMark, setCheckMark] = useState(false);
  const { shippingData, billingData, setBillingData } = useOrderFormContext();

  const formData = checkMark ? shippingData : billingData;
  const history = useHistory();
  return (
    <div className="margin-10">

      <h1 className="heavy-text">Billing Infomation</h1>
      <div className='flex vertical-flex'>
        <div
          onClick={() => setCheckMark(!checkMark)}
          style={{ backgroundColor: checkMark ? "#00edd9" : "white" }}
          className="checkbox"
        />
        <h5 className="light-text">Same as shipping?</h5>
      </div>

      <FormInput
        formData={formData}
        inputData={["firstname", "lastname"]}
        setInputData={setBillingData}
        placeholder={["First Name", "Last Name"]}
      />
      <FormInput
        formData={formData}
        inputData={["address"]}
        setInputData={setBillingData}
        placeholder={["Address"]}
      />
      <FormInput
        formData={formData}
        inputData={["subaddress"]}
        setInputData={setBillingData}
        placeholder={["Apartment, suite, etc"]}
      />
      <FormInput
        formData={formData}
        inputData={["city"]}
        setInputData={setBillingData}
        placeholder={["City"]}
      />
      <FormInput
        formData={formData}
        inputData={["country", "state", "zip"]}
        setInputData={setBillingData}
        placeholder={["Country", "State", "Zip"]}
      />

      <button
        onClick={() => history.push("/order-info/payment")}
        className="btn heavy-text margin-buffer"
      >
        <span>
          Continue To Payment
        </span>
      </button>
    </div>
  );
};

export default Billing;
