import React, { useEffect } from 'react'
import { Col, Form, Row, Button, FormGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../elements/Box'
import validador from '../../validators/PlayersValidator'
import PlayersService from '../../services/PlayersService'

const PlayersForm = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        const id = props.match.params.id
        if (id) {
            const player = PlayersService.get(id)
            for (let field in player) {
                setValue(field, player[field])
            }
        }
    }, [props, setValue])

    function sendData(data) {
        const id = props.match.params.id
        id ? PlayersService.update(data, id) : PlayersService.create(data)
        props.history.push('/players')
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
            <Box title="Cadastrar/Editar Jogador">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Alcunha: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("alcunha", validador.alcunha)} />
                            {errors.alcunha && <span className="text-danger">{errors.alcunha.message}</span>}
                        </Col>
                    </Form.Group>
                    <FormGroup as={Row} className="mb-3" controlId="gender">
                        <Form.Label column={2}>Sexo: </Form.Label>
                        <Col sm={10}>
                            <Form.Select {...register("gender")}>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Outro">Outro</option>
                            </Form.Select>
                        </Col>
                    </FormGroup>
                    <Form.Group as={Row} className="mb-3" controlId="naturalidade">
                        <Form.Label column sm={2}>Naturalidade: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("naturalidade", validador.naturalidade)} />
                            {errors.naturalidade && <span className="text-danger">{errors.naturalidade.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="data_nasc">
                        <Form.Label column sm={2}>Data de Nascimento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("data_nasc")} mask="99/99/9999" onChange={handleChange} />
                            {errors.data_nasc && <span className="text-danger">{errors.data_nasc.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="matricula">
                        <Form.Label column sm={2}>Matrícula: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("matricula")} mask="999.9999" onChange={handleChange} />
                            {errors.matricula && <span className="text-danger">{errors.matricula.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="posicao">
                        <Form.Label column sm={2}>Posição: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("posicao", validador.posicao)} />
                            {errors.posicao && <span className="text-danger">{errors.posicao.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="clube">
                        <Form.Label column sm={2}>Clube: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("clube")} />
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(sendData)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/players"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default PlayersForm;