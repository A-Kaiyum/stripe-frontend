import React from "react";
import "./App.css";
import axios from "axios";
import StripeRoutes from "./StripeRoutes";

export default function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Accept"] = "application/json";
  axios.defaults.baseURL = "http://localhost:8000/";

  return (
    <div>
      <StripeRoutes />
    </div>
  );
}
