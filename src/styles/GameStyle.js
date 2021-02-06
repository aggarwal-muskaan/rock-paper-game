import { makeStyles } from "@material-ui/core/styles";
import { greyColor, greyAlphaColor } from "./variables";
import breakpoint from "./breakpoints";

export default makeStyles({
  game: {
    width: "300px",
    height: "330px",
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [breakpoint.up("lg")]: {
      width: "420px",
    },
  },

  gameTools: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  userChoice: {
    borderWidth: ".8rem",
    borderStyle: "solid",

    borderColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60px 60px",
    backgroundPosition: "center",
    [breakpoint.up("lg")]: {
      borderWidth: "1rem",
    },
  },

  skeletonCaption: {
    color: "white",
    letterSpacing: "1px",
    fontSize: "14px",
  },

  gameResult: {
    color: "white",
    letterSpacing: "2px",
    fontSize: "45px",
    marginBottom: "15px",
  },

  buttonPlay: {
    padding: "10px 50px",
    color: greyColor,
    letterSpacing: "3px",
    fontSize: "12px",
    fontWeight: "600",
    borderRadius: "7px",
  },

  circleRipple: {
    borderRadius: "50%",
    animation: `$ripple .8s linear infinite`,
  },

  "@keyframes ripple": {
    "0%": {
      boxShadow: `0 0 0 0 ${greyAlphaColor(0.3)}, 0 0 0 1em ${greyAlphaColor(
        0.3
      )},0 0 0 2em ${greyAlphaColor(0.3)},0 0 0 4em ${greyAlphaColor(0.3)}`,
    },
    "100%": {
      boxShadow: `0 0 0 1em ${greyAlphaColor(0.3)},0 0 0 2em ${greyAlphaColor(
        0.3
      )},0 0 0 4em ${greyAlphaColor(0.3)},0 0 0 7em ${greyAlphaColor(0)}`,
    },
  },
});
