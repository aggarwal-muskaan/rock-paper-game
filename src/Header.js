import logoBonus from "./images/logo-bonus.svg";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { useContext } from "react";
import { currentScore } from "./context/score.context";
import useStyles from "./styles/HeaderStyle";

const Header = (props) => {
  const classes = useStyles(props);
  const score = useContext(currentScore);
  return (
    <div className={classes.header}>
      <Container className={classes.headerContainer}>
        <img
          className={classes.logoImage}
          src={logoBonus}
          alt="logo"
          width="60px"
          height="60px"
        />
        <Card variant="outlined" className={classes.headerCard}>
          <h4 className={classes.headerCardHeading}>SCORE</h4>
          <h1 className={classes.headerScore}>{score}</h1>
        </Card>
      </Container>
    </div>
  );
};

export default Header;
