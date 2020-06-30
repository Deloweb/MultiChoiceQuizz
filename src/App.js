import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Categories from "./pages/Categories";
import Categorie from "./pages/Categorie";
import Quizzs from "./pages/Quizzs";
import Questions from "./pages/Questions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route path="/categories/:id" component={Categorie} />

            <Route exact path="/quizzs" component={Quizzs} />
            <Route path="/quizzs/:id" component={Questions} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
