import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../elements/Box'
import validador from '../../validators/TeamsValidator'
import TeamsService from '../../services/TeamsService'

const TeamsForm = (props) => {


    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {

        const id = props.match.params.id

        if (id) {
            const team = TeamsService.get(id)
            for (let field in team) {
                setValue(field, team[field])
            }
        }
    }, [props, setValue])

    function sendData(data) {
        const id = props.match.params.id
        id ? TeamsService.update(data, id) : TeamsService.create(data)
        props.history.push('/teams')
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
            <Box title="Cadastrar/Editar time">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="alcunha">
                        <Form.Label column sm={2}>Alcunha: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("alcunha", validador.alcunha)} />
                            {errors.alcunha && <span className="text-danger">{errors.alcunha.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="corprim">
                        <Form.Label column xs={2}>Cor Prim??ria: </Form.Label>
                        <Form.Control
                            xs="auto"
                            type="color"
                            defaultValue="#000000"
                            {...register("corprim", validador.corprim)}
                        //onChange={handleChange}
                        />
                        {errors.corprim && <span className="text-danger">{errors.corprim.message}</span>}
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" ontrolId="corsec">
                        <Form.Label column xs={2}>Cor Secund??ria: </Form.Label>
                        <Form.Control
                            xs="auto"
                            type="color"
                            defaultValue="#FFFFFF"
                            {...register("corsec", validador.corsec)}
                        //onChange={handleChange}
                        />
                        {errors.corsec && <span className="text-danger">{errors.corsec.message}</span>}
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="mascote">
                        <Form.Label column sm={2}>Mascote: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("mascote", validador.mascote)} />
                            {errors.mascote && <span className="text-danger">{errors.mascote.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="estadio">
                        <Form.Label column sm={2}>Est??dio: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("estadio", validador.estadio)} />
                            {errors.estadio && <span className="text-danger">{errors.estadio.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="fundacao">
                        <Form.Label column sm={2}>Funda????o: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("fundacao")} mask="99/99/9999" onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <div>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Cidade: </Form.Label>
                                <Form.Control
                                    xs="auto"
                                    type="text"
                                    {...register("formGridCity", validador.localizacao)}
                                />
                                {errors.localizacao && <span className="text-danger">{errors.localizacao.message}</span>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Estado: </Form.Label>
                                <Form.Select  {...register("formGridState")} >
                                    <option value="Acre">Acre</option>
                                    <option value="Alagoas">Alagoas</option>
                                    <option value="Amap??">Amap??</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Cear??">Cear??</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Esp??rito Santo">Esp??rito Santo</option>
                                    <option value="Goi??s">Goi??s</option>
                                    <option value="Maranh??o">Maranh??o</option>
                                    <option value="Mato Grosso">Mato Grosso</option>
                                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                    <option value="Minas Gerais">Minas Gerais</option>
                                    <option value="Par??">Par??</option>
                                    <option value="Para??ba">Para??ba</option>
                                    <option value="Paran??">Paran??</option>
                                    <option value="Pernambuco">Pernambuco</option>
                                    <option value="Piau??">Piau??</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                    <option value="Rond??nia">Rond??nia</option>
                                    <option value="Roraima">Roraima</option>
                                    <option value="Santa Catarina">Santa Catarina</option>
                                    <option value="S??o Paulo">S??o Paulo</option>
                                    <option value="Sergipe">Sergipe</option>
                                    <option value="Tocantins">Tocantins</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </div>
                    <Form.Group as={Row} className="mb-3" controlId="presidente">
                        <Form.Label column sm={2}>Presidente: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("presidente")} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="foto">
                        <Form.Label column sm={2}>Foto: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" {...register("foto")} />
                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(sendData)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/teams"><FaArrowLeft /> Voltar</Link>

                    </div>
                </Form>
            </Box>
        </>
    )
}

export default TeamsForm;