import "./App.css";
import "../src/Allcssfile/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/HomePage";
import AccessBT from "./Pages/AllCollectionPages/Accesspage/AccessBT";
import AccSE from "./Pages/AllCollectionPages/Accesspage/AccSE";
import AccDrum from "./Pages/AllCollectionPages/Accesspage/AccDrum";
import BurgmanEx from "./Pages/AllCollectionPages/Burgmanpage/BurgmanEx";
import BurgBT from "./Pages/AllCollectionPages/Burgmanpage/BurgBT";
import Avenis from "./Pages/AllCollectionPages/Accesspage/Avenis";
import gixxersf from "./Pages/AllCollectionPages/GixxerSF&Naked/GixxerSF";
import gixxernaked from "./Pages/AllCollectionPages/GixxerSF&Naked/GixxerNaked";
import Aerox from "./Pages/AllCollectionPages/Aerox/Aerox";
import Myform from "./Pages/MyForm";
import AllAccessimg from "./Pages/AllCollectionPages/Accesspage/AllAccessimg";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AccessBT" component={AccessBT} />
          <Route exact path="/AccSE" component={AccSE} />
          <Route exact path="/AccDrum" component={AccDrum} />
          <Route exact path="/BurgmanEx" component={BurgmanEx} />
          <Route exact path="/BurgBT" component={BurgBT} />
          <Route exact path="/Avenis" component={Avenis} />
          <Route exact path="/gixxersf" component={gixxersf} />
          <Route exact path="/gixxernaked" component={gixxernaked} />
          <Route exact path="/Aerox" component={Aerox} />
          <Route exact path="/Getintouch" component={Myform} />
          <Route exact path="/AllAccessimg" component={AllAccessimg} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
