import React from "react";
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
import AccessBT from "./Pages/AllCollectionPages/Accesspage/AccessBTVariant/AccessBT";
import Myform from "./Pages/MyForm";
import "./Pages/AllCollectionPages/Accesspage/AccessBTVariant/cssfile/AccessBT.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AccessBT" component={AccessBT} />
          <Route exact path="/Getintouch" component={Myform} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
