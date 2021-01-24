import tools from "./tools";
// import Game from "./Game";
import { Link } from "react-router-dom";

import pentagon from "./images/bg-pentagon.svg";
import "./styles/Pentagon.css";
import Skeleton from "@material-ui/lab/Skeleton";

function Pentagon() {
  const print = tools.map((t) => (
    <Link to="/result" key={t.name}>
      <Skeleton
        className={"single-item " + t.name}
        // onClick={() => handleClick(t.name)}
        variant="circle"
        width="70px"
        height="70px"
        animation={false}
        style={{
          backgroundColor: "#fff",
          backgroundImage: t.path,
        }}
      />
    </Link>
  ));
  return (
    <div className="Pentagon">
      <div
        className="pentagon-tools"
        style={{
          backgroundImage: `url(${pentagon})`,
        }}
      >
        {print}
      </div>
      {/* <div>RULES</div> */}
    </div>
  );
}

export default Pentagon;
