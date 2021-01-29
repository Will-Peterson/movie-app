import React, { Component } from "react";
import { Home } from "./pages/Home";
import { Watched } from "./pages/Watched";
import { Watchlist } from "./pages/Watchlist";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Jumbotron } from "./components/Jumbotron";
import { NavigationBar } from "./components/NavigationBar";

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
              <Route path="/movie-app" component={Home} />
              <Route path="/watched" component={Watched} />
              <Route path="/watchlist" component={Watchlist} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </GlobalProvider>
    );
  }
}

export default App;
