import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../elements/Box'
import validador from '../../validators/CoachesValidator'
import CoachesService from '../../services/CoachesService'
// import { mask, unMask } from 'remask'

const CoachesForm = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const coach = CoachesService.get(id)
            for (let field in coach) {
                setValue(field, coach[field])
            }
        }
    }, [props, setValue])

    function sendData(data) {
        const id = props.match.params.id
        id ? CoachesService.update(data, id) : CoachesService.create(data)
        props.history.push('/coaches')
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
            <Box title="Cadastrar/Editar Comissão Técnica">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="time">
                        <Form.Label column sm={2}>Time: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("time", validador.time)} />
                            {errors.time && <span className="text-danger">{errors.time.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="tecnico">
                        <Form.Label column sm={2}>Técnico: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("tecnico", validador.tecnico)} />
                            {errors.tecnico && <span className="text-danger">{errors.tecnico.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="aux01">
                        <Form.Label column sm={2}>Auxiliar Técnico: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("aux01", validador.aux01)} />
                            {errors.aux01 && <span className="text-danger">{errors.aux01.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="aux02">
                        <Form.Label column sm={2}>Preparador Físico: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("aux02", validador.aux02)} />
                            {errors.aux02 && <span className="text-danger">{errors.aux02.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(sendData)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/coaches"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default CoachesForm;