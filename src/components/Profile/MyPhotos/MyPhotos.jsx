import React from "react";
import st from "./MyPhotos.module.css";
const MyPhotos = () => {
  return (
    <div className={st.container}>
      <div className={st.my_photo}>
        <h3>Photos</h3>
        <div className={st.photos}>
          <div className={st.photo_item}>
            <img src="Noimages.png" alt=" otsutstvuet" />
          </div>
          <div className={st.photo_item}>
            <img src="Noimages.png" alt=" otsutstvuet" />
          </div>
          <div className={st.photo_item}>
            <img src="Noimages.png" alt=" otsutstvuet" />
          </div>
          <div className={st.photo_item}>
            <img src="Noimages.png" alt=" otsutstvuet" />
          </div>
          <div className={st.photo_item}>
            <img src="Noimages.png" alt=" otsutstvuet" />
          </div>
          <div className={st.photo_item}>
            <img src="Noimages.png" alt=" otsutstvuet" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPhotos;
