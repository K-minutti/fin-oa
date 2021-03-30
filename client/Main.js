import React from "react";
import Sidebar from "./Sidebar";
import { withRouter, Switch, Route } from "react-router-dom";
import Overview from "./Overview";
import BiasDetection from "./BiasDetection";
import Officer360 from "./Officer360";
import Data from "./Data";
import Settings from "./Settings";
import { connect } from "react-redux";
import { fetchCustomerLoans } from "./store/customerLoans";

class Main extends React.Component {
  componentDidMount() {
    this.props.loadCustomerLoans();
  }

  render() {
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCustomerLoans: () => dispatch(fetchCustomerLoans()),
  };
};

//export default withRouter(Main);
export default connect(null, mapDispatchToProps)(Main);
