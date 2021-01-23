import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
import spock from "./images/icon-spock.svg";
import lizard from "./images/icon-lizard.svg";

import pentagon from "./images/bg-pentagon.svg";

import Skeleton from "@material-ui/lab/Skeleton";

function Pentagon() {
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="pentagon-tools"
        style={{
          backgroundImage: `url(${pentagon})`,
          backgroundSize: "cover",
          height: "220px",
          width: "230px",
        }}
      >
        {/* <img src={rock} alt="rock" />
        <img src={paper} alt="paper" />
        <img src={scissors} alt="scissors" />
        <img src={spock} alt="spock" />
        <img src={lizard} alt="lizard" /> */}

        <Skeleton
          variant="circle"
          width="100px"
          height="100px"
          animation={false}
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${paper})`,
            backgroundRepeat: "no-repeat",
            // backgroundSize: "auto",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div>RULES</div>
    </div>
  );
}

export default Pentagon;
