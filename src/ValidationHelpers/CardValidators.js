/* Credit card validators that take a card number string and cvv2 
   number string as inputs and return true if all rules pass, else false */
export const VisaValidator = (card, cvv2) => {
  if (typeof card === 'string' && 
      card.length === 16 && 
      card[0] === '4' && 
      typeof cvv2 === 'string' && 
      cvv2.length === 3) {
    return true;
  }
  return false;
}

export const AmExValidator = (card, cvv2) => {
  if (typeof card === 'string' && 
      card.length === 15 && 
      (card.slice(0,2) === '34' || card.slice(0,2) === '37') && 
      typeof cvv2 === 'string' && 
      cvv2.length === 4) {
    return true;
  }
  return false;
}

/* Consolidated credit card validator that takes the same inputs as
   individual card validators, but returns a card type string (e.g. 
   'Visa' or 'AmEx') if the card passes that validation type, else null
   -assumes no one card number and cvv2 combination can match
    multiple card types, else will need hierarchical ordering/cascading 
    logic integrated to prevent this edge case */
export const UniversalCardValidator = (card, cvv2) => {
  if (VisaValidator(card, cvv2)) {
    return 'Visa';
  } else if (AmExValidator(card, cvv2)) {
    return 'AmEx';
  }

  return null;
}
