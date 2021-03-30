import React from "react";
import Header from "./Header";
import Main from "./Main";
import history from "./history";
import { HashRouter as Router } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />

          <Main />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
