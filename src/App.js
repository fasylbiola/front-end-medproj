import React from "react";
import Dashboard from "./screens/Dashboard/Dashboard";
import Form from "./components/Form";
import Home from "./screens/Home/HomeScreen";
import test from "./components/test";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/form" component={Form} exact />
      <Route path="/test" component={test} exact />
    </Router>
  );
};
export default App;
