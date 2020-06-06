import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <App display={"This is a prop from client"} />
  </BrowserRouter>,
  document.getElementById("root")
);
