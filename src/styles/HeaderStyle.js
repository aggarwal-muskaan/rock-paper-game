import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    width: "300px",
    // height: "400px",
    // padding: "1.5rem 1rem",
  },

  headerContainer: {
    padding: ".5rem",
    border: "3px solid hsl(217, 16%, 45%)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerCard: { padding: "0 1.5rem" },

  headerCardHeading: {
    color: "hsl(229, 64%, 46%)",
    marginBottom: 0,
  },

  headerScore: {
    color: "hsl(229, 25%, 31%)",
    marginTop: 0,
  },
});

export default useStyles;
