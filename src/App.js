import "./App.css";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";
import { ManageScore } from "./context/score.context";

function App() {
  // const [score, setScore] = useState("0");
  return (
    <div className="App">
      <ManageScore>
        <Header />

        <Routes />
      </ManageScore>
      {/* <Pentagon /> */}
      <Footer />
    </div>
  );
}

export default App;
