import { makeStyles } from "@material-ui/core/styles";
import breakpoint from "./breakpoints";

export default makeStyles({
  footer: {
    // display: "inline-block",
    width: "100vw",
    [breakpoint.up("lg")]: {
      paddingRight: "7rem",
    },
  },

  footerButton: {
    borderColor: "#fff",
    color: "#fff",
    [breakpoint.up("lg")]: {
      float: "right",
      padding: ".3rem 2rem",
    },
  },

  modalText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
