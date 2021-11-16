import React, { useState, useEffect } from 'react'
import { Card, Col, Row} from 'react-bootstrap'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../elements/Box'
import ShowCanvasForTeams from '../../elements/ShowCanvasForTeams'
import TeamsService from '../../services/TeamsService'
import Button from 'react-bootstrap/Button'
import imagem from '../../img/times.jpg'

const Teams = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        const teams = TeamsService.getAll()
        setTeams(teams)
    }, [])

    function trash(idx) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            TeamsService.delete(idx)
            setTeams(TeamsService.getAll())
        }
    }



    return (
        <>
            <Box title="Times" >
                <Row xs={1} md={4} className="g-4">
                    {teams.map((team, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" height={175} src={imagem} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{team.nome}</Card.Title>
                                    <div className="d-grid gap-2">
                                        <ShowCanvasForTeams
                                            idx={idx}
                                            nome={team.nome}
                                            corprim={team.corprim}
                                            corsec={team.corsec}
                                            mascote={team.mascote}
                                            estadio={team.estadio}
                                            fundacao={team.fundacao}
                                            cidade={team.formGridCity}
                                            estado={team.formGridState}
                                            presidente={team.presidente}
                                        />
                                        <Button variant='outline-danger' key={idx} onClick={() => trash(idx)} >
                                            <FaRegTrashAlt title="Excluir" />
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className='text-center' position="relative">
                    <Link to="/teams/create" className=" btn btn-secondary mb-4 " ><FaPlus /> Adicionar time</Link>
                </div>
            </Box>
        </>
    )
}

export default Teams