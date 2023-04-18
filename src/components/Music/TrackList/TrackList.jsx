import React from "react";
import st from "./TrackList.module.css";
import Track from "./Track/Track";

const TrackList = () => {
  return (
    <div className={st.container}>
      <h5>Track List</h5>
      <ul className={st.track_list}>
        <Track trackName="Track 01" />
        <Track trackName="Track 02" />
        <Track trackName="Track 03" />
        <Track trackName="Track 04" />
        <Track trackName="Track 04" />
        <Track trackName="Track 04" />
      </ul>
    </div>
  );
};
export default TrackList;
