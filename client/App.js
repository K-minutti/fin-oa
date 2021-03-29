import React from "react";
import Header from "./Header";
import Main from "./Main";
import history from "./history";
import { BrowserRouter as Router } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router history={history}>
          <Main />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
