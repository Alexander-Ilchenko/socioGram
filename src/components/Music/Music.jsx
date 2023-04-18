import React from "react";
import st from "./Music.module.css";
import Player from "./Player/Player";
import TrackList from "./TrackList/TrackList";

const Music = () => {
  return (
    <main className={st.main}>
      <div className={st.search}>
        <h5>Search Music</h5>
        <div className={st.container}>
          <div className={st.search_line}>
            <div className={st.input}>
              <input type="text" placeholder="   Search track" />
            </div>
            <div className={st.btn}>
              <button className={st.btn}>Find</button>
            </div>
          </div>
        </div>
      </div>
      <Player />
      <TrackList />
    </main>
  );
};
export default Music;
