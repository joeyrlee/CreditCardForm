import * as Constants from '../Constants';
import { 
  VisaValidator, 
  AmExValidator, 
  UniversalCardValidator 
} from './CardValidators';


/* Run validation on the fivec CredCardForm component input fields
   and return null if it passes, else an object of validation errors
   organized by field name */
export function creditCardFormValidator(state) {
  const validationErrors = {};

  /* Validation Item #1: name input field */
  if (!state[Constants.FIELD_NAME]) {
    validationErrors[Constants.FIELD_NAME] = 'A valid name is required';
  }

  /* Validation Item #2: basic card number validation */
  if (!VisaValidator(state[Constants.FIELD_CC_NUMBER], state[Constants.FIELD_CVV2]) &&
      !AmExValidator(state[Constants.FIELD_CC_NUMBER], state[Constants.FIELD_CVV2])) {
    validationErrors[Constants.FIELD_CC_NUMBER] = 'A valid credit card number is required'
  }

  /* Validation Item #3: basic CVV2 number validation */
  if (!(state[Constants.FIELD_CVV2] && 
        (state[Constants.FIELD_CVV2].length === 3 ||
         state[Constants.FIELD_CVV2].length === 4))) {
    validationErrors[Constants.FIELD_CVV2] = 'A valid CVV2 is required'
  }

  /* Validation Item #4: This is a bit tricky because technically 
     a card number could be valid but a CVV2 invalid and visa
     versa and so we just opt to apply validation error messages to 
     both fields when either fails for MVP */
  if (!UniversalCardValidator(state[Constants.FIELD_CC_NUMBER], state[Constants.FIELD_CVV2])) {
    validationErrors[Constants.FIELD_CC_NUMBER] = 'A valid credit card number is required';
    validationErrors[Constants.FIELD_CVV2] = 'A valid CVV2 is required'
  }

  /* Validation Item #5: expiration month input field */
  if (!state[Constants.FIELD_EXP_DATE_MONTH] || !/^(0[1-9]|1[012])$/.test(state[Constants.FIELD_EXP_DATE_MONTH])) {
    validationErrors[Constants.FIELD_EXP_DATE_MONTH] = 'A valid expiration month is required'
  }  

  /* Validation Item #6: expiration year input field */
  if (!(!isNaN(Number(state[Constants.FIELD_EXP_DATE_YEAR])) && Number(state[Constants.FIELD_EXP_DATE_YEAR]) > new Date().getFullYear())) {
    validationErrors[Constants.FIELD_EXP_DATE_YEAR] = 'A valid expiration month is required'
  }

  console.log("@@@ validation errors:",validationErrors)

  return Object.keys(validationErrors).length > 0 ? validationErrors : null;
}
