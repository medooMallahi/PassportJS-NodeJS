import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import _ from "lodash";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import FIELDS from "./formFields";

class SurveyForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSurveySubmit}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
          </button>
        </form>
      </React.Fragment>
    );
  }

  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          key={name}
        />
      );
    });
  } // end of renderFields
} // end of the class

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || " ");

  if (!values.title) {
    errors.title = "you must provide a title ";
  }
  if (!values.subject) {
    errors.subject = "you must provide a subject ";
  }
  if (!values.body) {
    errors.body = "you must provide a body ";
  }
  if (!values.emails) {
    errors.emails = "you must provide a emails ";
  }

  return errors;
} // end of the function

// this will provide this class handleSubmit function in form tag
SurveyForm = reduxForm({
  // a unique name for the form
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
})(SurveyForm);

export default SurveyForm;
