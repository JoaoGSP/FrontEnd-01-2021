import messages from "./messages";

const GamesValidator = {
  timecasa: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength }
  },
  timevisitante: {
    required: messages.required,
    maxLength: { value: 50, message: messages.maxLength }
  },
  horario: {
    required: messages.required
  },
  data: {
    required: messages.required
  },
  estadio: {
    required: messages.required
  },
  localizacao: {
    required: messages.required
  },
  arbitragem: {
    required: messages.required
  },
};
export default GamesValidator;
