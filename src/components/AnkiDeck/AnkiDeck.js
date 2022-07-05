import React, { useEffect } from "react";
import AnkiCard from "../Card/AnkiCard";
import { Button, IconButton, Typography, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { ankiFirstGrade } from "../../data/ankiDecks";
import shuffleArray from "./../../typescript/functions";
import { useCardStore } from "../../zustand/cardStore";

const greyScale = createTheme({
  palette: {
    primary: {
      main: "#78909c",
      light: "#a7c0cd",
      dark: "#4b636e",
    },
  },
});

//FETCH DECK
const nowDeck = [];
ankiFirstGrade.map((ankiFGCard) => {
  nowDeck.push(ankiFGCard);
});

export default () => {
  //DECK STATE ZUSTAND
  const currentDeck = useCardStore((state) => state.currentDeck);
  const currentCard = useCardStore((state) => state.currentCard);
  const setDeck = useCardStore((state) => state.setDeck);
  const clearDeck = useCardStore((state) => state.clearDeck);
  const clear = useCardStore((state) => state.clear);
  //NEXT-PREV
  const nextCard = useCardStore((state) => state.nextCard);
  const previousCard = useCardStore((state) => state.previousCard);

  //SHUFFLE AND SET
  useEffect(() => {
    setDeck(shuffleArray(nowDeck));
  }, [setDeck, clear]);

  return (
    <div>
      {currentDeck.length > 0 && (
        <div
          style={{
            color: "#455a64",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Previous */}
              <ThemeProvider theme={greyScale}>
                <IconButton
                  aria-label="Previous"
                  color="primary"
                  size="large"
                  sx={{ border: 2, marginRight: "2%" }}
                  //click
                  onClick={previousCard}
                  disabled={currentCard === 0}
                >
                  <ArrowBackIosOutlined />
                </IconButton>
              </ThemeProvider>

              {/* Card */}
              <AnkiCard
                ankiKanji={currentDeck[currentCard].kanji}
                ankiMeaning={currentDeck[currentCard].meaning}
              />

              {/* Next */}
              <ThemeProvider theme={greyScale}>
                <IconButton
                  aria-label="Previous"
                  color="primary"
                  size="large"
                  sx={{ border: 2, marginLeft: "2%" }}
                  //click
                  onClick={nextCard}
                  disabled={currentCard === currentDeck.length - 1}
                >
                  <ArrowForwardIosOutlined />
                </IconButton>
              </ThemeProvider>
            </div>

            {/* Counter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <Typography variant="h6">
                {currentCard + 1}/{currentDeck.length}
              </Typography>
            </div>

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <ThemeProvider theme={greyScale}>
                <Button
                  variant="outlined"
                  disableElevation
                  sx={{ marginRight: "1%" }}
                  disabled
                >
                  Decks
                </Button>

                <Tooltip
                  title="Shuffles deck and restarts"
                  arrow
                  placement="right"
                >
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{ marginLeft: "1%" }}
                    onClick={() => {
                      clearDeck();
                    }}
                  >
                    Shuffle
                  </Button>
                </Tooltip>
              </ThemeProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
