import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderApp = (state) => {
  root.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  );
};

rerenderApp(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderApp(state);
});
