import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Main from "../layout/Main";
import NotFoundPage from "../layout/404";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/404" component={NotFoundPage} />
    <Redirect to="/404" />
  </Switch>
);

export default Routes;
