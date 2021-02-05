import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    width: "300px",
    // height: "110px",
    // padding: "1.5rem 1rem",
  },

  headerContainer: {
    padding: ".5rem",
    border: "4px solid hsl(217, 16%, 45%)",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoImage: {
    marginLeft: "1rem",
  },

  headerCard: {
    height: "90px",
    padding: "0 1.5rem",
  },

  headerCardHeading: {
    color: "hsl(229, 64%, 46%)",
    margin: "10px 0 0",
    letterSpacing: "2px",
    fontSize: "14px",
  },

  headerScore: {
    color: "hsl(229, 25%, 31%)",
    margin: "0 0 10px",
    fontSize: "45px",
  },
});

export default useStyles;
