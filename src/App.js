import "./App.css";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";
import { ManageScore } from "./context/score.context";
import { ManageTool } from "./context/tool.context";

function App() {
  // const [score, setScore] = useState("0");
  return (
    <div className="App">
      <ManageScore>
        <Header />
        <ManageTool>
          <Routes />
        </ManageTool>
      </ManageScore>
      {/* <Pentagon /> */}
      <Footer />
    </div>
  );
}

export default App;
