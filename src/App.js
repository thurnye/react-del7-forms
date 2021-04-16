import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';
import About from './container/about/about'
import Contact from './container/contact/contact'



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route path="/" exact component={About} />
          <Route path="/contact"  component={Contact} />
          </Switch>
        </Router>
        
      </React.Fragment>
    )
  }
}
