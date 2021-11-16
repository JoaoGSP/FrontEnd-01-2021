import messages from "./messages";

const RefereesValidator = {
  arbitroprincipal: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  bandeira01: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  bandeira02: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  auxarbitro01: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  auxarbitro02: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
};

export default RefereesValidator;
