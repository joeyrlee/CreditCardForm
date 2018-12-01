/*
 *
 * Drop-and-go Credit Card Form React component
 *
 * -feature backlog:
 *  -variable heading levels (i.e. heading level may not always be h1)
 *  -image optimization
 *
**/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import UIInputField from './UIInputField';

class CreditCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form novalidate>
        <fieldset>
          <legend>
            <h1>Enter your credit card information</h1>
          </legend>
          <UIInputField />
          <UIInputField />
          <UIInputField />
          <div class="columns-6">
            <UIInputField />
          </div>
          <div class="columns-6">
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
