import React from "react";
import st from "./Track.module.css";

const Track = (props) => {
  return (
    <li>
      <div className={st.container}>
        <img src="playpause.png" alt="playpause" />
        <h5>{props.trackName}</h5>
      </div>
    </li>
  );
};
export default Track;
