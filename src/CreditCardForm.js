/*
 *
 * Drop-and-go Credit Card Form React component
 *
 * -feature backlog:
 *  -dynamic validation indicator adjacent to form inputs
 *  -image optimization
 *  -re-locate text to i18n abstraction layer 
 *
**/

import React, { Component } from 'react';
import { creditCardFormValidator } from './ValidationHelpers/creditCardFormValidator';
import PropTypes from 'prop-types';
import './App.scss';

import * as Constants from './Constants';
import UIInputField from './UIInputField';

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    //pre-populate form state if applicable
    this.state = {
      [Constants.FIELD_NAME]: props[Constants.FIELD_NAME],
      [Constants.FIELD_CC_NUMBER]: props[Constants.FIELD_CC_NUMBER],
      [Constants.FIELD_CVV2]: props[Constants.FIELD_CVV2],
      [Constants.FIELD_EXP_DATE_MONTH]: props[Constants.FIELD_EXP_DATE_MONTH],
      [Constants.FIELD_EXP_DATE_YEAR]: props[Constants.FIELD_EXP_DATE_YEAR],
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = creditCardFormValidator(this.state);
    console.log("@@@ 2 validationErrors:",validationErrors)
    if (validationErrors) {
      this.setState({errors: validationErrors});
    } else {
      this.props.handleFormSubmission(this.state);
    }
  }

  handleChange = (name, value) => {
    console.log("@@@ handlechange;",name,value)
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="credit-card-form" noValidate>
        <fieldset>
          <legend>Enter your credit card information</legend>
          <UIInputField
            value={this.state[Constants.FIELD_NAME]}
            handleChange={this.handleChange}
            name={Constants.FIELD_NAME}
            placeholder="Name"
            autocomplete="name"
            errorMessage={this.state.errors[Constants.FIELD_NAME]} />
          <UIInputField
            value={this.state[Constants.FIELD_CC_NUMBER]}
            handleChange={this.handleChange}
            name={Constants.FIELD_CC_NUMBER}
            placeholder="Card Number"
            autocomplete="cc-number"
            minlength="15"
            maxlength="16"
            errorMessage={this.state.errors[Constants.FIELD_CC_NUMBER]} />
          <UIInputField
            value={this.state[Constants.FIELD_CVV2]}
            handleChange={this.handleChange}
            name={Constants.FIELD_CVV2}
            placeholder="CVV2"
            autocomplete="cc-csc"
            minLength="3"
            maxlength="4"
            errorMessage={this.state.errors[Constants.FIELD_CVV2]} />
          <div className="split-input-container">
            <UIInputField
              value={this.state[Constants.FIELD_EXP_DATE_MONTH]}
              handleChange={this.handleChange}
              name={Constants.FIELD_EXP_DATE_MONTH}
              placeholder="Exp. Month"
              autocomplete="cc-exp-month"
              layout="inline-block"
              minLength="2"
              maxlength="2"
              errorMessage={this.state.errors[Constants.FIELD_EXP_DATE_MONTH]} />
            <UIInputField
              value={this.state[Constants.FIELD_EXP_DATE_YEAR]}
              handleChange={this.handleChange}
              name={Constants.FIELD_EXP_DATE_YEAR}
              placeholder="Exp. Year"
              autocomplete="cc-exp-year"
              layout="inline-block"
              minlength="4"
              maxlength="4"
              errorMessage={this.state.errors[Constants.FIELD_EXP_DATE_YEAR]} />
          </div>
          <img src="http://www.fa.ufl.edu/wp-content/uploads/cardops/Credit-Card-Logos.jpg" alt="visa, master card, discover network, american express" />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </fieldset>
      </form>
    );
  }
}

CreditCardForm.defaultProps = {
  type: "text",
  placeholder: null,
  layout: "block",
  errorMessage: "",
  minlength: null,
  maxlength: null,
  /* default form state */
  [Constants.FIELD_NAME]: "",
  [Constants.FIELD_CC_NUMBER]: "",
  [Constants.FIELD_CVV2]: "",
  [Constants.FIELD_EXP_DATE_MONTH]: "",
  [Constants.FIELD_EXP_DATE_YEAR]: ""
}

CreditCardForm.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.string,
  errorMessage: PropTypes.string,
  minlength: PropTypes.string,
  maxlength: PropTypes.string,
  [Constants.FIELD_NAME]: PropTypes.string,
  [Constants.FIELD_CC_NUMBER]: PropTypes.string,
  [Constants.FIELD_CVV2]: PropTypes.string,
  [Constants.FIELD_EXP_DATE_MONTH]: PropTypes.string,
  [Constants.FIELD_EXP_DATE_YEAR]: PropTypes.string,
  handleFormSubmission: PropTypes.func.isRequired
}

export default CreditCardForm;
