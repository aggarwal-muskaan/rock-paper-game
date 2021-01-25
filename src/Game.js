import tools from "./tools";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles/Game.css";
function Game(props) {
  // return <div>{props.tool}</div>;
  const user = tools.find((t) => t.name === props.userTool);
  console.log(user);
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
          />
          <p>THE HOUSE PICKED</p>
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
