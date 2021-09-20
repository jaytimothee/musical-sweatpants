import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/AlbumSearch.css";
import FormInput from "./FormInput";
import { useOrderFormContext } from "../../providers/OrderFormProvider";

const Shipping = () => {
  const { shippingData, setShippingData } = useOrderFormContext();
  const history = useHistory();

  return (
    <div className="margin-10">

      <h1 className="heavy-text">Shipping Infomation</h1>

      <FormInput
        formData={shippingData}
        inputData={["firstname", "lastname"]}
        setInputData={setShippingData}
        placeholder={["First Name", "Last Name"]}
      />
      <FormInput
        formData={shippingData}
        inputData={["address"]}
        setInputData={setShippingData}
        placeholder={["Address"]}
      />
      <FormInput
        formData={shippingData}
        inputData={["subaddress"]}
        setInputData={setShippingData}
        placeholder={["Apartment, suite, etc"]}
      />
      <FormInput
        formData={shippingData}
        inputData={["city"]}
        setInputData={setShippingData}
        placeholder={["City"]}
      />
      <FormInput
        formData={shippingData}
        inputData={["country", "state", "zip"]}
        setInputData={setShippingData}
        placeholder={["Country", "State", "Zip"]}
      />

      <button
        onClick={() => history.push("/order-info/billing")}
        className="btn heavy-text margin-buffer"
      >
        <span>
          Continue To Billing
        </span>
      </button>
    </div>
  );
};

export default Shipping;
