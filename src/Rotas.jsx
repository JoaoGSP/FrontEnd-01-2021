import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Main from './pages/main/Main'
import Teams from './pages/teams/Teams'
import TeamsForm from './pages/teams/TeamsForm'
import Players from './pages/players/Players'
import PlayersForm from './pages/players/PlayersForm'
import Coaches from './pages/coaches/Coaches'
import CoachesForm from './pages/coaches/CoachesForm'
import Referees from './pages/referees/Referees'
import RefereesForm from './pages/referees/RefereesForm'
import Games from './pages/games/Games'
import GamesForm from './pages/games/GamesForm'

const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/teams" component={Teams} />
                <Route exact path="/teams/create" component={TeamsForm} />
                <Route exact path="/teams/:id" component={TeamsForm} />
                <Route exact path="/players" component={Players} />
                <Route exact path="/players/create" component={PlayersForm} />
                <Route exact path="/players/:id" component={PlayersForm} />
                <Route exact path="/coaches" component={Coaches} />
                <Route exact path="/coaches/create" component={CoachesForm} />
                <Route exact path="/coaches/:id" component={CoachesForm} />
                <Route exact path="/referees" component={Referees} />
                <Route exact path="/referees/create" component={RefereesForm} />
                <Route exact path="/referees/:id" component={RefereesForm} />
                <Route exact path="/games" component={Games} />
                <Route exact path="/games/create" component={GamesForm} />
                <Route exact path="/games/:id" component={GamesForm} /> 
            </Switch>
        </Container>
    )
}

export default Rotas;