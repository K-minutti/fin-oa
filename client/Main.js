import React from "react";
import Sidebar from "./Sidebar";
import { withRouter, Switch, Route } from "react-router-dom";
import Overview from "./Overview";
import BiasDetection from "./BiasDetection";
import Officer360 from "./Officer360";
import Data from "./Data";
import Settings from "./Settings";

const Main = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="main-container">
        <Switch>
          <Route path="/overview" component={Overview} />
          <Route path="/biasDetection" component={BiasDetection} />
          <Route path="/officer360" component={Officer360} />
          <Route path="/data" component={Data} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Main);
