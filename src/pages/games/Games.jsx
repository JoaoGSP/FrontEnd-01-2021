import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit,  FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../elements/Box'
import ShowInfoForGames from '../../elements/ShowInfoForGames'
import GamesService from '../../services/GamesService'


const Games = () => {

    const [games, setGames] = useState([])

    const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
        return (
          <a ref={ref} {...props}><FaEdit title="Editar" /> {props.children}</a>
        )
      })
      
      

    useEffect(() => {
        const games = GamesService.getAll()
        setGames(games)
    }, [])

    function trash(idx) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            GamesService.delete(idx)
            setGames(GamesService.getAll())
        }
    }

    return (
        <>
            <Box title="Partidas" >
                <Table striped bordered hover variant="dark" >
                    <thead className="text-center">
                        <tr>
                            <th>Partida N°</th>
                            <th>Mandantes</th>
                            <th>Visitantes</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {games.map((game, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{game.timecasa}</td>
                                <td>{game.timevisitante}</td>
                                <td>
                                    <div className="row row-cols-3">
                                    <ShowInfoForGames 
                                    timecasa={game.timecasa}
                                    timevisitante={game.timevisitante}
                                    horario={game.horario}
                                    date={game.date}
                                    estadio={game.estadio}
                                    arbitragem={game.arbitragem}
                                    />
                                    <Link to={'/games/' + idx} component={FancyLink} />
                                    <FaRegTrashAlt className="text-danger" onClick={() => trash(idx)} title="Excluir" />
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
                <div className='text-center' position="relative">
                    <Link to="/games/create" className=" btn btn-secondary mb-4 " ><FaPlus /> Adicionar partida</Link>
                </div>
            </Box>
        </>
    )
}

export default Games