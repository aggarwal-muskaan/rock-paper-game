import tools from "./tools";
import { useContext } from "react";
import { selectTool } from "./context/tool.context";
import useStyles from "./styles/PentagonStyle";
import "./styles/PentagonTools.css";
import Skeleton from "@material-ui/lab/Skeleton";

function Pentagon(props) {
  const newTool = useContext(selectTool);
  const classes = useStyles(props);

  const print = tools.map((t) => (
    <Skeleton
      key={t.name}
      // className={"single-item " + t.name}
      className={`${classes.singleItem} ${t.name}`}
      onClick={() => {
        newTool(t);
        props.history.push("/result");
      }}
      variant="circle"
      width="70px"
      height="70px"
      animation={false}
      style={{ backgroundImage: t.path }}
    />
  ));
  return (
    <div className={classes.pentagon}>
      <div className={classes.pentagonTools}>{print}</div>
    </div>
  );
}

export default Pentagon;
