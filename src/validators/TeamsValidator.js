import messages from "./messages";

const TeamsValidator = {
  nome: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  corprim: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  corsec: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  mascote: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  estadio: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  fundacao: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
  localizacao: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength }
  },
  presidente: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength },
  },
};

export default TeamsValidator;
