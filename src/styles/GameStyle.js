import { makeStyles } from "@material-ui/core/styles";
import { greyColor, greyAlphaColor } from "./variables";
import breakpoint from "./breakpoints";

export default makeStyles({
  game: {
    width: "300px",
    height: "330px",
    margin: "2rem",
    [breakpoint.up("md")]: {
      width: "450px",
      height: "400px",
    },
    [breakpoint.up("lg")]: {
      width: "750px",
      height: "300px",
    },
  },

  gameTools: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    [breakpoint.up("md")]: {
      rowGap: "15%",
    },
    [breakpoint.up("lg")]: {
      display: "flex",
      alignItems: "center",
      width: "70%",
      justifyContent: "space-between",
      margin: "auto",
    },
  },

  skeletonsWithResult: {
    [breakpoint.up("lg")]: {
      width: "100%",
    },
  },

  toolContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  skeleton2: {
    [breakpoint.up("lg")]: {
      order: "3",
    },
  },

  text: {
    gridRow: "2",
    gridColumn: "1/3",
    [breakpoint.up("lg")]: {
      order: "2",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  userChoice: {
    width: "100px",
    height: "100px",
    border: ".8rem solid transparent",
    //todo =box-shadow & gradient border
    // boxShadow: "2px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60px 60px",
    backgroundPosition: "center",
    [breakpoint.up("md")]: {
      width: "130px",
      height: "130px",
      borderWidth: "1.1rem",
      backgroundSize: "70px 70px",
    },
    [breakpoint.up("lg")]: {
      order: "2",
      width: "150px",
      height: "150px",
      borderWidth: "1.5rem",
      backgroundSize: "80px 80px",
    },
  },

  skeletonCaption: {
    color: "white",
    letterSpacing: "1px",
    fontSize: "14px",
    [breakpoint.up("lg")]: {
      order: "1",
      marginBottom: "2rem",
      zIndex: 2,
    },
  },

  gameResult: {
    color: "white",
    letterSpacing: "2px",
    fontSize: "45px",
    marginBottom: "15px",
    [breakpoint.up("lg")]: {
      marginTop: 0,
    },
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
    [breakpoint.up("lg")]: {
      animation: `$rippleLg .8s linear infinite`,
    },
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
  "@keyframes rippleLg": {
    "0%": {
      boxShadow: `0 0 0 0 ${greyAlphaColor(0.3)}, 0 0 0 2em ${greyAlphaColor(
        0.3
      )},0 0 0 4em ${greyAlphaColor(0.3)},0 0 0 6em ${greyAlphaColor(0.3)}`,
    },
    "100%": {
      boxShadow: `0 0 0 2em ${greyAlphaColor(0.3)},0 0 0 4em ${greyAlphaColor(
        0.3
      )},0 0 0 6em ${greyAlphaColor(0.3)},0 0 0 8em ${greyAlphaColor(0)}`,
    },
  },
});
