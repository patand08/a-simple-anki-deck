import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, IconButton, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to right bottom, #62727b, #455a64)",
        }}
      >
        <Toolbar sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            color="text"
            sx={{
              flexGrow: 1,
              color: "#eceff1",
              fontFamily: "Roboto Condensed",
              letterSpacing: ".2rem",
              textDecoration: "none",
              fontSize: "2.5rem",
            }}
          >
            A SIMPLE ANKI DECK
          </Typography>

          <div
            style={{
              float: "right",
              position: "fixed",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              size="small"
              edge="start"
              aria-label="linkedin"
              disableRipple
              sx={{ color: "#eceff1", display: { xs: "none", sm: "block" } }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/patrick-andrade-77332a147/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              size="small"
              edge="start"
              aria-label="github"
              disableRipple
              sx={{ color: "#eceff1", display: { xs: "none", sm: "block" } }}
              onClick={() =>
                window.open(
                  "https://github.com/Patrux08/a-simple-anki-deck",
                  "_blank"
                )
              }
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
