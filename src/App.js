import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import CheckoutForm from "./Components/CheckoutForm";
import axios from "axios";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51LtSJLGiXzKYuOYkQjOQcod5ZhxNxnsyIezQUgDHHC5BPSr1JVrOeCrBUwdG1owKJEzFjh9V9CsXtRB9RTzEtaU200Kr8oNp8P"
);

export default function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Accept"] = "application/json";
  axios.defaults.baseURL = "http://localhost:8000/";

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    let items = {
      id: "xl-tshirt",
    };
    axios.post("api/make-payment", items).then((res) => {
      console.log("res======>", res);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
