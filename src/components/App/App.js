import React from "react";
import AnkiDeck from "../AnkiDeck/AnkiDeck";
import NavBar from "../NavBar/NavBar";
import { Typography } from "@mui/material";

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

      <Typography
        sx={{
          right: 0,
          bottom: 0,
          opacity: "0.5",
          paddingRight: "0.5%",
          position: "fixed",
          fontSize: "0.75rem",
          color: "#4b636e",
          display: { xs: "none", sm: "block" },
        }}
      >
        Created by Patrick Andrade in 07/22
      </Typography>
    </div>
  );
};
