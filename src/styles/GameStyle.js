import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  game: {
    width: "300px",
    height: "330px",
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    color: "hsl(229, 25%, 31%)",
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
      boxShadow:
        "0 0 0 0 hsla(229, 25%, 31%,.3), 0 0 0 1em hsla(229, 25%, 31%,.3),0 0 0 3em hsla(229, 25%, 31%,.3),0 0 0 4em hsla(229, 25%, 31%,.3)",
    },
    "100%": {
      boxShadow:
        "0 0 0 1em hsla(229, 25%, 31%,.3),0 0 0 3em hsla(229, 25%, 31%,.3),0 0 0 4em hsla(229, 25%, 31%,.3),0 0 0 7em hsla(229, 25%, 31%,0)",
    },
  },
});