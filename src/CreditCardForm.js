/*
 *
 * Drop-and-go Credit Card Form React component
 *
 * -feature backlog:
 *  -image optimization
 *
**/

import React, { Component } from 'react';
import UniversalCardValidator from './CardValidators/CardValidators';
import './App.scss';

import UIInputField from './UIInputField';

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="credit-card-form" noValidate>
        <fieldset>
          <legend>Enter your credit card information</legend>
          <UIInputField />
          <UIInputField />
          <UIInputField />
          <div className="columns-6">
            <UIInputField />
          </div>
          <div className="columns-6">
            <UIInputField />
          </div>
          <img src="http://www.fa.ufl.edu/wp-content/uploads/cardops/Credit-Card-Logos.jpg" alt="visa, master card, discover network, american express" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default CreditCardForm;
