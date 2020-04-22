// import React from 'react';
import logo from "./logo.svg";
import React, {Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Task from "./Task";
import Home from "./Home";
import NotFound from "./NotFound"
import My_dashboard from "./My_dashboard";
import Create_task from "./Create_task";
import EditTaskForm from "./EditTaskForm";


class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/dashboard" exact={true} component={Task} />
          <Route path="/create_task" exact={true} component={Create_task} />
          <Route path="/my_dashboard" exact={true} component={My_dashboard} />
          <Route path="/edittaskform" exact={true} component={EditTaskForm} />
          <Route component ={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
