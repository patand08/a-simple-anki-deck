import React from "react";
import AnkiDeck from "../AnkiDeck/AnkiDeck";
import NavBar from "../NavBar/NavBar";

export default () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right bottom, #fff7ff, #eeffff)",
        height: "100vh",
        margin: -8,
      }}
    >
      <NavBar />
      <div style={{ marginTop: "2%" }}>
        <AnkiDeck />
      </div>
    </div>
  );
};
