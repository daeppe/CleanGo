import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";

ReactDOM.render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>,
  document.getElementById("root")
);
