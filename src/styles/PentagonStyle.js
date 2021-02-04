import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  pentagon: {
    height: "300px",
    width: "300px",
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-items: center; */
  },

  pentagonTools: {
    /* backgroundImage: url(${pentagon}); */
    backgroundSize: "cover",
    height: "220px",
    width: "230px",
  },

  singleItem: {
    /* TODO: border gradient
                    // borderColor: `linear-gradient(to bottom,${t.color1},${t.color2}) `, */
    /*? background-color: white; */

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

  rock: {
    top: "-2.5rem",
    left: "4.5rem",
  },

  paper: {
    top: "-3rem",
    right: "-11rem",
  },

  scissors: {
    top: "-1.2rem",
  },

  lizard: {
    top: "-7rem",
    left: "8rem",
  },

  spock: {
    bottom: "20.5rem",
    left: "-2.2rem",
  },
});
