import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import MakePayment from "./Components/MakePayment";

function StripeRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<MakePayment />} />
        {/* <Route path="checkout" element={<Checkout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default StripeRoutes;
