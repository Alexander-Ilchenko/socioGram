import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderApp = (state) => {
  root.render(
    <App
      state={state}
      addPost={store.addPost.bind(store)}
      changeNewPostText={store.changeNewPostText.bind(store)}
    />
  );
};

rerenderApp(store.getState());
store.subscribe(rerenderApp);
