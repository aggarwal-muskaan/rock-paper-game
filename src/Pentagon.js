import tools from "./tools";
import { useContext } from "react";
import { selectTool } from "./context/tool.context";

import pentagon from "./images/bg-pentagon.svg";
import "./styles/Pentagon.css";
import Skeleton from "@material-ui/lab/Skeleton";

function Pentagon(props) {
  const newTool = useContext(selectTool);

  const print = tools.map((t) => (
    <Skeleton
      key={t.name}
      className={"single-item " + t.name}
      onClick={() => {
        newTool(t);
        props.history.push("/result");
      }}
      variant="circle"
      width="70px"
      height="70px"
      animation={false}
      style={{
        backgroundColor: "#fff",
        backgroundImage: t.path,
      }}
    />
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
