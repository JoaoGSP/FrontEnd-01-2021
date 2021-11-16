import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { mask, unMask } from 'remask'
import Box from '../../elements/Box'
import validador from '../../validators/RefereesValidator'
import RefereesService from '../../services/RefereesService'

const RefereesForm = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const referee = RefereesService.get(id)
            for (let field in referee) {
                setValue(field, referee[field])
            }
        }
    }, [props, setValue])

    function sendData(data) {
        const id = props.match.params.id
        id ? RefereesService.update(data, id) : RefereesService.create(data)
        props.history.push('/referees')
    }

    // function handleChange(event) {
    //     const name = event.target.name
    //     const mascara = event.target.getAttribute('mask')

    //     let value = unMask(event.target.value)
    //     value = mask(value, mascara)

    //     setValue(name, value)
    // }

    return (
        <>
            <Box title="Cadastrar/Editar Equipe de Arbitragem">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="arbitro">
                        <Form.Label column sm={2}>Arbitro Principal: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("arbitro", validador.arbitro)} />
                            {errors.arbitro && <span className="text-danger">{errors.arbitro.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="bandeira01">
                        <Form.Label column sm={2}>Bandeirinha 01: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("bandeira01", validador.bandeira01)} />
                            {errors.bandeira01 && <span className="text-danger">{errors.bandeira01.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="bandeira02">
                        <Form.Label column sm={2}>Bandeirinha02: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("bandeira02", validador.bandeira02)} />
                            {errors.bandeira02 && <span className="text-danger">{errors.bandeira02.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="auxarbitro01">
                        <Form.Label column sm={2}>4° Árbitro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("auxarbitro01", validador.auxarbitro01)} />
                            {errors.auxarbitro01 && <span className="text-danger">{errors.auxarbitro01.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="auxarbitro02">
                        <Form.Label column sm={2}>5° Árbitro: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("auxarbitro02", validador.auxarbitro02)} />
                            {errors.auxarbitro02 && <span className="text-danger">{errors.auxarbitro02.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(sendData)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/referees"><FaArrowLeft /> Voltar</Link>

                    </div>
                </Form>
            </Box>
        </>
    )
}

export default RefereesForm;