import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./homePage";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
    </Switch>
  );
};

export default Main;
