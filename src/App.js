import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogPage from "./components/Dialogs/DialogPage/dialogPage";

function App(props) {
  return (
    <div className="wrupper">
      <Header />
      <Navbar />
      <div className="content-wrupper">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.messagesPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/dialogs/Alex333"
            element={
              <DialogPage state={props.state} dispatch={props.dispatch} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
