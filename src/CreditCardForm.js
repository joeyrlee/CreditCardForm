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
          <UIInputField
            placeholder="Name" />
          <UIInputField
            placeholder="Card Number" />
          <UIInputField
            placeholder="CVV2" />
          <div class="split-input-container">
            <UIInputField
              placeholder="Exp. Month"
              layout="inline-block" />
            <UIInputField
              placeholder="Exp. Year"
              layout="inline-block" />
          </div>
          <img src="http://www.fa.ufl.edu/wp-content/uploads/cardops/Credit-Card-Logos.jpg" alt="visa, master card, discover network, american express" />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default CreditCardForm;
