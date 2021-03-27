import React from "react";
import Header from "./Header";
import Main from "./Main";
import { HashRouter as Router } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Main />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
