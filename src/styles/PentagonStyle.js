import { makeStyles } from "@material-ui/core/styles";
import pentagon from "../images/bg-pentagon.svg";

export default makeStyles({
  pentagon: {
    height: "330px",
    width: "300px",
    display: "contents",
  },

  pentagonTools: {
    backgroundImage: `url(${pentagon})`,
    backgroundSize: "cover",
    height: "220px",
    width: "230px",
  },

  singleItem: {
    position: "relative",
    cursor: "pointer",

    width: "70px",
    height: "70px",

    borderWidth: "0.7rem",
    borderStyle: "solid",
    backgroundColor: "#fff",
    backgroundRepeat: "no-repeat",
    backgroundSize: "40px 40px",
    backgroundPosition: "center",
  },
});
