import React from "react";
import { Grid, Card, alpha, Typography, Divider } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { useCardStore } from "../../zustand/cardStore";

export default (props) => {
  //CARD STATE ZUSTAND
  const isFront = useCardStore((state) => state.isFront);
  const flipCard = useCardStore((state) => state.flipCard);
  //CARD FLIP
  const { transform, opacity } = useSpring({
    opacity: isFront ? 1 : 0,
    transform: `rotateY(${isFront ? 180 : 0}deg)`,
    config: { mass: 5, tension: 900, friction: 80 },
  });

  return (
    <div>
      {/* CARD BACK */}
      <animated.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
        <Card
          elevation={3}
          onClick={flipCard}
          sx={{
            position: "absolute",
            cursor: "pointer",
            minWidth: "17rem",
            minHeight: "24rem",
            display: "flex",
            border: 10,
            borderRadius: 5,
            borderColor: "#455a64",
            color: "#455a64",
            background: "radial-gradient(ellipse at top,#fffbf3, #fff4cd)",
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h2">{props.ankiKanji}</Typography>
              <Divider
                variant="middle"
                sx={{
                  width: "33%",
                  background: alpha("#455a64", 0.5),
                  mt: 1.5,
                  mb: 2,
                }}
              />
              <Typography variant="h4">{props.ankiMeaning}</Typography>
            </Grid>
          </Grid>
        </Card>
      </animated.div>

      {/* CARD FRONT */}
      <animated.div
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <Card
          elevation={3}
          onClick={flipCard}
          sx={{
            cursor: "pointer",
            minWidth: "17rem",
            minHeight: "24rem",
            display: "flex",
            border: 10,
            borderRadius: 5,
            borderColor: "#455a64",
            color: "#455a64",
            background: "radial-gradient(ellipse at top,#fffbf3, #fff4cd)",
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="h1">{props.ankiKanji}</Typography>
            </Grid>
          </Grid>
        </Card>
      </animated.div>
    </div>
  );
};
