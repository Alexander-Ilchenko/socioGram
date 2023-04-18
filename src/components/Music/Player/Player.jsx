import React from "react";
import st from "./Player.module.css";

const Player = () => {
  return (
    <div className={st.container}>
      <h5>Music Player</h5>
      <div className={st.player}></div>
    </div>
  );
};
export default Player;
