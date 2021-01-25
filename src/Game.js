import tools from "./tools";
import checkResult from "./checkResult";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";

import "./styles/Game.css";
function Game(props) {
  //extracting the tool the user has chosen
  const user = tools.find((t) => t.name === props.userTool);

  // setting state with hook
  const [states, setState] = useState({
    resultStatus: "",
    houseTool: { name: "", path: "", position: 0 },
  });

  //! for using updated state in gameResult()
  const currPosition = useRef(null);
  currPosition.current = states.houseTool.position;

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
    let res = checkResult(user.position, currPosition.current);
    console.log(res);
  };

  useEffect(() => {
    const t1 = setTimeout(chooseHouseTool, 1000);
    const t2 = setTimeout(gameResult, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [props.userTool]);

  return (
    <div>
      <div className="Game1">
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
        <h1>YOU WIN</h1>
        <Link to="/">
          <Button variant="contained">PLAY AGAIN</Button>
        </Link>
      </div>
    </div>
  );
}

export default Game;
