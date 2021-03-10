import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navigation/NavbarHeader";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
//import Navbar from './components/layout/Navbar';
//import Navbar from './components/layout/NavbarSubmenu';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <h1>Go to HELL YOU PIECE OF SHIT</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
