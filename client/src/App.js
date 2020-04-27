import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Join} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;
