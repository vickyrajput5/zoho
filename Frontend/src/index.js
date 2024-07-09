import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// // Material Dashboard 2 React Context Provider
// import { MaterialUIControllerProvider } from "context";
import { Provider } from "react-redux";
import store from "context/store/store";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
