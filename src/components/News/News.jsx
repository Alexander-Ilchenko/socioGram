import React from "react";
import st from "./News.module.css";
import Event from "./Event/Event";

const News = () => {
  return (
    <main className={st.main}>
      <Event
        date="16.04.2023__11:53"
        text="red or yollow doesnt metter"
        userName="Alexey Novikov"
      />
      <Event
        date="16.04.2023__11:53"
        text="red or yollow doesnt metter"
        userName="Igor Dobrovolskiy"
      />
      <Event
        date="16.04.2023__11:53"
        text="red or yollow doesnt metter"
        userName="Maxim Pavlichenko"
      />
      <Event
        date="16.04.2023__11:53"
        text="red or yollow doesnt metter"
        userName="Igor Dobrovolskiy"
      />
      <Event
        date="16.04.2023__11:53"
        text="red or yollow doesnt metter"
        userName="Maxim Pavlichenko"
      />
    </main>
  );
};
export default News;
