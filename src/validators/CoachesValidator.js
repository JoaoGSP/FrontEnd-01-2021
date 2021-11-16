import messages from "./messages";

const CoachesValidator = {
  tecnico: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  aux01: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  aux02: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
};

export default CoachesValidator;
