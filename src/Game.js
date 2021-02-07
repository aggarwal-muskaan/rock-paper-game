/* eslint-disable */
// import { useBeforeunload } from "react-beforeunload";
import { useState, useEffect, useRef, useContext } from "react";
import { editScore } from "./context/score.context";
import { currTool } from "./context/tool.context";
import tools from "./tools";
import checkResult from "./checkResult.js";

import useStyles from "./styles/GameStyle";
import Skeleton from "@material-ui/lab/Skeleton";
import Button from "@material-ui/core/Button";

function Game(props) {
  const classes = useStyles(props);
  // setting state with hook
  const [states, setState] = useState({
    result: {
      resultStatus: "",
      resultPos: "",
    },
    houseTool: { name: "", path: "", color: "", position: 0 },
  });

  //using ContextAPI
  const dispatch = useContext(editScore);
  const { user, reset } = useContext(currTool);

  //for using updated state in gameResult()
  const currPosition = useRef(null);
  currPosition.current = states.houseTool;

  // choosing random tool for house's side
  const chooseHouseTool = () => {
    const rand = Math.floor(Math.random() * tools.length);
    const selected = tools[rand];
    setState({
      ...states,
      houseTool: {
        position: selected.position,
        name: selected.name,
        path: selected.path,
        color: selected.color1,
      },
    });
  };

  //validating rules to gather result
  const gameResult = () => {
    let [resPos, res] = checkResult(
      user.position,
      currPosition.current.position
    );

    switch (resPos) {
      case 0:
        dispatch({ type: "add" });
        break;
      // case 1:
      //   dispatch({ type: "sub" });
      //   break;
      default:
        break;
    }
    setState({
      result: { resultStatus: res, resultPos: resPos },
      houseTool: currPosition.current,
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(chooseHouseTool, 1000);
      setTimeout(gameResult, 2000);
    }

    return () => {
      //cleanup
      //  clearTimeout(t1);
      //  clearTimeout(t2);
    };
  }, [user]);

  const redirect = (
    <Button
      variant="contained"
      onClick={() => {
        reset();
        props.history.push("/");
      }}
      className={classes.buttonPlay}
    >
      PLAY AGAIN
    </Button>
  );

  const showResult = (
    <div className={classes.text}>
      <h1 className={classes.gameResult}>{states.result.resultStatus}</h1>
      {states.result.resultStatus && redirect}
    </div>
  );
  const print = (
    <div className={classes.game}>
      <div
        className={
          `${classes.gameTools} ` +
          (states.result.resultStatus && `${classes.skeletonsWithResult}`)
        }
      >
        <div className={`${classes.toolContainer}`}>
          <Skeleton
            className={
              `${classes.userChoice} ` +
              (states.result.resultPos === 0 ? `${classes.circleRipple}` : "")
            }
            variant="circle"
            animation={false}
            style={{
              backgroundColor: "#fff",
              backgroundImage: user.path,
              borderColor: user.color1,
            }}
          />
          <p className={classes.skeletonCaption}>YOU PICKED</p>
        </div>

        {states.result.resultStatus && showResult}

        <div className={`${classes.skeleton2} ${classes.toolContainer}`}>
          <Skeleton
            className={
              `${classes.userChoice} ` +
              (states.result.resultPos === 1 ? `${classes.circleRipple}` : "")
            }
            variant="circle"
            animation={false}
            style={{
              borderColor: states.houseTool.color,
              backgroundColor: states.houseTool.color && "#FFF",
              backgroundImage: states.houseTool.path,
            }}
          />
          <p className={classes.skeletonCaption}>THE HOUSE PICKED</p>
        </div>
      </div>
    </div>
  );
  return user ? print : redirect;
}

export default Game;
