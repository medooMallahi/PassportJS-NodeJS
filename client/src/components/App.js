import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route exact path="/surveys/new" component={SurveyNew} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, actions)(App);
