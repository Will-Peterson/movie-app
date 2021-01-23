import React, { Component } from "react";
import { Home } from "./pages/Home";
import { Watchlist } from "./pages/Watchlist";
import { About } from "./pages/About";
import { Watched } from "./pages/Watched";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { GlobalProvider } from "./context/GlobalState";

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/watchlist" component={Watchlist} />
              <Route path="/watched" component={Watched} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </GlobalProvider>
    );
  }
}

export default App;
