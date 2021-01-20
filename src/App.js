import React, {Component} from 'react';
import './App.css';
import {Home} from './pages/Home';
import {Watchlist} from './pages/Watchlist';
import {About} from './pages/About';
import {NoMatch} from './pages/NoMatch';
import {Layout} from './components/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <NavigationBar />
            <Jumbotron />
            <Layout>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/watchlist' component={Watchlist} />
                  <Route component={NoMatch} />
                </Switch>
            </Layout>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;
