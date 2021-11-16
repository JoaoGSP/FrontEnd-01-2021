import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../elements/Box'
import validador from '../../validators/GamesValidator'
import GamesService from '../../services/GamesService'

const GamesForm = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        
        let id
        props.match.params.id ? id = props.match.params.id : console.log(props);

        if (id) {
            const game = GamesService.get(id)
            for (let field in game) {
                setValue(field, game[field])
            }
        }
    }, [props, setValue])

    function sendData(data) {
        const id = props.match.params.id
        id ? GamesService.update(data, id) : GamesService.create(data)
        props.history.push('/games')
    }

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let value = unMask(event.target.value)
        value = mask(value, mascara)

        setValue(name, value)
    }

    return (
        <>
            <Box title="Cadastrar/Editar Jogos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="timecasa">
                        <Form.Label column sm={2}>Time Mandante: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("timecasa", validador.timecasa)} />
                            {errors.timecasa && <span className="text-danger">{errors.timecasa.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="timevisitante">
                        <Form.Label column sm={2}>Time Visitante: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("timevisitante", validador.timevisitante)} />
                            {errors.timevisitante && <span className="text-danger">{errors.timevisitante.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="horario">
                        <Form.Label column sm={2}>Horário: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("horario", validador.horario)} mask="99:99"  onChange={handleChange}/>
                            {errors.horario && <span className="text-danger">{errors.horario.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="date">
                        <Form.Label column sm={2}>Data: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("date", validador.date)} mask="99/99/9999" onChange={handleChange} />
                            {errors.date && <span className="text-danger">{errors.date.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="estadio">
                        <Form.Label column sm={2}>Estádio: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("estadio", validador.estadio)} />
                            {errors.estadio && <span className="text-danger">{errors.estadio.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="arbitragem">
                        <Form.Label column sm={2}>Equipe de Arbitragem: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("arbitragem", validador.arbitragem)} />
                            {errors.arbitragem && <span className="text-danger">{errors.arbitragem.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(sendData)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/games"><FaArrowLeft /> Voltar</Link>

                    </div>
                </Form>
            </Box>
        </>
    )
}

export default GamesForm;