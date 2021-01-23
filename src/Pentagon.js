import tools from "./tools";
import Game from "./Game";
import pentagon from "./images/bg-pentagon.svg";
import "./styles/Pentagon.css";
import Skeleton from "@material-ui/lab/Skeleton";

function Pentagon() {
  // console.log(tools[3].path);
  const handleClick = (name) => {
    console.log("hii");
    <Game tool={name} />;
  };
  const print = tools.map((t) => (
    <Skeleton
      key={t.name}
      className={t.name}
      // onClick={<Game tool={t.name} />}
      onClick={() => handleClick(t.name)}
      variant="circle"
      width="70px"
      height="70px"
      animation={false}
      style={{
        backgroundImage: t.path,
        cursor: "pointer",

        borderWidth: ".7rem",
        borderStyle: "solid",
        // TODO: border gradient
        // borderColor: `linear-gradient(to bottom,${t.color1},${t.color2}) `,

        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    />
  ));
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
        {print}
        {/* <img src={rock} alt="rock" />
        <img src={paper} alt="paper" />
        <img src={scissors} alt="scissors" />
        <img src={spock} alt="spock" />
        <img src={lizard} alt="lizard" /> */}
        {/* TODO:loop
         */}
      </div>
      <div>RULES</div>
    </div>
  );
}

export default Pentagon;
