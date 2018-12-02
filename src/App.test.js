/* Missing Tests:
 * -creditCardFormValidator
 * -monthValidator
 * -yearValidator
 *
**/

import React from 'react';
import ReactDOM from 'react-dom';
import CreditCardForm from './CreditCardForm';
import UIInputField from './UIInputField';
import {
  VisaValidator, 
  AmExValidator, 
  UniversalCardValidator
} from './ValidationHelpers/CardValidators';

/* VisaValidator tests */
it('should only accept string card type inputs', () => {
  expect(VisaValidator(4444333322221111, '123')).toEqual(false);
});
it('should only accept string cvv2 type inputs', () => {
  expect(VisaValidator('4444333322221111', 123)).toEqual(false);
});
it('should only return true for 16-digit card numbers', () => {
  expect(VisaValidator('4', '123')).toEqual(false);
});
it('should only return true for card numbers that start with `4`', () => {
  expect(VisaValidator('1111222233334444', '123')).toEqual(false);
});
it('should only return true for 3-digit cvv2 numbers', () => {
  expect(VisaValidator('4444333322221111', '1')).toEqual(false);
});
it('should pass card/cvv2 combinations that pass all the above', () => {
  expect(VisaValidator('4444333322221111', '123')).toEqual(true);
})

/* AmExValidator tests */
it('should only accept string card type inputs', () => {
  expect(AmExValidator(342133332222123, '1234')).toEqual(false);
});
it('should only accept string cvv2 type inputs', () => {
  expect(AmExValidator('342133332222123', 1234)).toEqual(false);
});
it('should only return true for 15-digit card numbers', () => {
  expect(AmExValidator('34', '1234')).toEqual(false);
});
it('should only return true for card numbers that start with `34` or `37`', () => {
  expect(AmExValidator('350123412341234', '1234')).toEqual(false);
});
it('should only return true for 4-digit cvv2 numbers', () => {
  expect(AmExValidator('340123412341234', '1')).toEqual(false);
});
it('should pass card/cvv2 combinations that pass all the above', () => {
  expect(AmExValidator('340123412341234', '1234')).toEqual(true);
})

/* UniversalCardValidator function Visa test */
it('should return Visa number/cvv2 inputs as `Visa` strings', () => {  
  expect(UniversalCardValidator('4444333322221111', '123')).toEqual('Visa');
});

/* UniversalCardValidator function AmEx test */
it('should return AmEx number/cvv2 inputs as `AmEx` strings', () => {  
  expect(UniversalCardValidator('340123412341234', '1234')).toEqual('AmEx');
});

/* creditCardFormValidator test */
// it('should return an object of field-name:error-message pairs when there are any validation errors', () => {
//   expect().equals({

//   });
// })
// it('should return null when there are no validation errors', () => {
//   expect().toEqual(null);
// })

/* Generic component-rendering smoke tests */
it('renders CreditCardForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreditCardForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders UIInputField without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UIInputField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
