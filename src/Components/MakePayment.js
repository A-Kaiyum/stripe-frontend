import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import axios from "axios";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LtSJLGiXzKYuOYkQjOQcod5ZhxNxnsyIezQUgDHHC5BPSr1JVrOeCrBUwdG1owKJEzFjh9V9CsXtRB9RTzEtaU200Kr8oNp8P"
);

function MakePayment() {
  const [clientSecret, setClientSecret] = useState("");

  const makePayment = () => {
    let items = {
      amount: 200 * 100,
    };
    axios.post("api/make-payment", items).then(async (res) => {
      console.log("res======>", res);
      let clientSecretKey = await res.data.clientSecret;
      setClientSecret(clientSecretKey);
    });
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      <div>
        <button
          className="btn btn-primary content-center"
          onClick={makePayment}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
}

export default MakePayment;
