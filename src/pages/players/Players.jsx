import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../elements/Box'
import ShowCanvasForPlayers from '../../elements/ShowCanvasForPlayers'
import PlayersService from '../../services/PlayersService'
import Button from 'react-bootstrap/Button'
import image from '../../img/jogadores.jpg'


const Players = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        const players = PlayersService.getAll()
        setPlayers(players)
    }, [])

    function trash(idx) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            PlayersService.delete(idx)
            setPlayers(PlayersService.getAll())
        }
    }



    return (
        <>
            <Box title="Jogadores" >
                <Row xs={1} md={4} className="g-4">
                    {players.map((player, idx) => (

                        <Col>
                            <Card>
                                <Card.Img variant="top" height={200} src={image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{player.alcunha}</Card.Title>
                                    <div className="d-grid gap-2">
                                        <ShowCanvasForPlayers
                                            idx={idx}
                                            nome={player.nome}
                                            alcunha={player.alcunha}
                                            gender={player.gender}
                                            naturalidade={player.naturalidade}
                                            data_nasc={player.data_nasc}
                                            matricula={player.matricula}
                                            posicao={player.posicao}
                                            clube={player.clube}
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
                    <Link to="/players/create" className=" btn btn-secondary mb-4 " ><FaPlus /> Adicionar time</Link>
                </div>
            </Box>
        </>
    )
}

export default Players;