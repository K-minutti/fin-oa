import React from "react";
import Sidebar from "./Sidebar";
import { withRouter, Switch, Route } from "react-router-dom";
import Overview from "./Overview";
const Main = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="main-container">
        <Switch>
          <Route path="/overview" component={Overview} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Main);
