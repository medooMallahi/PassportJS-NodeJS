import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import FIELDS from "./formFields";
import * as actions from "../../actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, (field) => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>please confirm your entries</h5>
      {reviewFields}
      <button className="yellow white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        className="green darken-3 btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
