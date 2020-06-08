import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Instead of BrowserRouter I have to use HashRouter for Github pages
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Room from "./components/Room";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Left from "./components/Left";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Settings} />

        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <Top />
              <div className="layout-row layout-xs-column">
                <Left />
                <Home />
              </div>
              <Footer />
            </React.Fragment>
          )}
        />
        <Route exact path={`/room/:roomId`} component={Room} />
        <Route path="/devices" component={Devices} />

        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;