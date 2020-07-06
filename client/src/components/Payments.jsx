import React, { Component } from "react";
import StripeChechout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  onToken = (token) => {
    this.props.handleToken(token);
  };

  render() {
    return (
      <StripeChechout
        name="Emaily"
        description="$5 for Emaily"
        amount={500}
        currency="USD"
        label="Pay with card"
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default connect(null, actions)(Payments);
