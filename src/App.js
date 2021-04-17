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
  state = {
    msgs: []
  }
  componentDidMount() {
    this.getMessages()
    
  }
  getMessages = async () => {
    await fetch("/api").then((res) => res.json()).then(data => this.setState({msgs: data}))
  }


  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
          <Route path="/" exact> 
          <About messages={this.state.msgs}/>
          </Route>
          <Route path="/contact">
            <Contact getMessages={this.getMessages}/>
          </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
