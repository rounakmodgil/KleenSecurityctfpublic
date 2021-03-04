import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./App.css";

const PageNotFound = () => <div>404....not found</div>;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/joinnow' component={Signup} />
        <Route path='/login' component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
