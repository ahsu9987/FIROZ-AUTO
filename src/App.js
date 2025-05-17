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
import AccessBTMatblue from "./Pages/AllCollectionPages/Accesspage/AccessBTVariant/AccessBTMatblue";
import Myform from "./Pages/MyForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AccessBTBlue" component={AccessBTMatblue} />
          <Route exact path="/Getintouch" component={Myform} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
