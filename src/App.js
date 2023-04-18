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

function App() {
  return (
    <BrowserRouter>
      <div className="wrupper">
        <Header />
        <Navbar />
        <div className="content-wrupper">
          <Routes>
            <Route path="/profile" Component={Profile} />
            <Route path="/dialogs" Component={Dialogs} />
            <Route path="/news" Component={News} />
            <Route path="/music" Component={Music} />
            <Route path="/settings" Component={Settings} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
