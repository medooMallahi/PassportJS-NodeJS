import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
        break;
      case false:
        return (
          <li>
            <a href="/auth/google">Log in with Google</a>
          </li>
        );
        break;
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            credits:{this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
        break;
    }
  } // end of renderContent
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper #ec407a pink lighten-1">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Header);
