import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Landing from "./Landing";
import Pricing from "./Pricing";

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/pricing" component={Pricing} exact />
            <Route path="/" component={Landing} exact />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}