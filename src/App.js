import "./App.css";
import Header from "./Header";
import Routes from "./Routes";
import Footer from "./Footer";

function App() {
  // const [score, setScore] = useState("0");
  return (
    <div className="App">
      <Header />

      <Routes />
      {/* <Pentagon /> */}
      <Footer />
    </div>
  );
}

export default App;
