const messages = {
  name: {
    required: "Can’t be blank",
    wrong: "Wrong format, letter only",
  },
  cardNumbers: {
    required: "Can’t be blank",
    wrong: "Wrong format, numbers only",
  },
  month: {
    required: "Can’t be blank",
    wrong: "Wrong format, numbers only",
  },
  year: {
    required: "Can’t be blank",
    wrong: "Wrong format, numbers only",
  },
  cvc: {
    required: "Can’t be blank",
    wrong: "Wrong format, numbers only",
  },
};
const patterns = {
  onlyLetters: /^[a-zA-Z]+$/,
  onlyNumbers: /^[0-9,$]*$/,
};

const nameValidation = {
  required: messages.name.required,
  minLength: {
    value: 3,
    message: "Name must be at least 3 characters",
  },
  pattern: {
    value: patterns.onlyLetters,
    message: messages.name.wrong,
  },
};

const cardNumbersValidation = {
  required: messages.cardNumbers.required,
  minLength: {
    value: 16,
    message: "Number is too short",
  },
  pattern: {
    value: patterns.onlyNumbers,
    message: messages.lastname.wrong,
  },
};

const monthValidation = {
  required: messages.month.required,
  minLength: {
    value: 2,
    message: "Number is too short",
  },
  pattern: {
    value: patterns.onlyNumbers,
    message: messages.email.wrong,
  },
};
const yearValidation = {
  required: messages.year.required,
  minLength: {
    value: 2,
    message: "Number is too short",
  },
  pattern: {
    value: patterns.onlyNumbers,
    message: messages.email.wrong,
  },
};

const cvcValidation = {
  required: messages.cvc.required,
  pattern: {
    value: patterns.onlyNumbers,
    message: messages.email.wrong,
  },
};

export const FORM_VALIDATION = {
  NAME: nameValidation,
  CARDNUMBERS: cardNumbersValidation,
  MONTH: monthValidation,
  YEAR: yearValidation,
  CVC: cvcValidation,
};
