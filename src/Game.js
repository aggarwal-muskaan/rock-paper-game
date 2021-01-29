/* eslint-disable */
// import { useBeforeunload } from "react-beforeunload";
import { useState, useEffect, useRef, useContext } from "react";
import { editScore } from "./context/score.context";
import { currTool } from "./context/tool.context";
import tools from "./tools";
import checkResult from "./checkResult.js";

import "./styles/Game.css";
import Skeleton from "@material-ui/lab/Skeleton";
import Button from "@material-ui/core/Button";

function Game(props) {
  // setting state with hook
  const [states, setState] = useState({
    resultStatus: "",
    houseTool: { name: "", path: "", position: 0 },
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
    setState({ houseTool: currPosition.current, resultStatus: res });
  };

  useEffect(() => {
    if (user) {
      setTimeout(chooseHouseTool, 1000);
      setTimeout(gameResult, 3000);
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
    >
      PLAY AGAIN
    </Button>
  );

  const print = (
    <div className="Game">
      <div className="Game-tools">
        <div>
          <Skeleton
            className="user-choice"
            variant="circle"
            width="120px"
            height="120px"
            animation={false}
            style={{
              backgroundColor: "#fff",
              backgroundImage: user.path,
            }}
          />
          <p>YOU PICKED</p>
        </div>

        <div>
          <Skeleton
            className="user-choice"
            variant="circle"
            animation={false}
            width="120px"
            height="120px"
            // style={{
            //   backgroundColor: "#fff",
            //   backgroundImage: user.path,
            // }}
          />
          <p>THE HOUSE PICKED:{states.houseTool.name}</p>
        </div>
      </div>
      <div>
        <h1>{states.resultStatus}</h1>
        {states.resultStatus && redirect}
      </div>
    </div>
  );
  return user ? print : redirect;
}

export default Game;
