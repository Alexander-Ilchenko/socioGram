import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderApp = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
        sendMessage={store.sendMessage.bind(store)}
        changeNewMessageText={store.changeNewMessageText.bind(store)}
      />
    </BrowserRouter>
  );
};

rerenderApp(store.getState());
store.subscribe(rerenderApp);
