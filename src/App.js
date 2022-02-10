import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Chatbox from './screens/Chatbox'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/chatbox" component={Chatbox} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
