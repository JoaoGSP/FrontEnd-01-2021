import messages from "./messages"

const PlayersValidator = {
    nome: {
        required: messages.required,
        maxLength: {value: 50, message: messages.maxLength}
    },
    naturalidade: {
        required: messages.required,
        maxLength: {value: 50, message: messages.maxLength}
    },
    data_nasc: {
        required: messages.required,
    },
    matricula: {
        required: messages.required,
    },
    posicao: {
        required: messages.required,
        maxLength: {value: 50, message: messages.maxLength}
    },
    clube: {
        required: messages.required,
        maxLength: {value: 50, message: messages.maxLength}
    }
}

export default PlayersValidator