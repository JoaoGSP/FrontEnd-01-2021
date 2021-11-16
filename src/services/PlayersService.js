class PlayersService {

    getAll() {
        const players = localStorage.getItem('players')
        return players ? JSON.parse(players) : []
    }

    get(id) {
        const players = this.getAll()
        return players[id]
    }

    create(data) {
        const players = this.getAll()
        players.push(data)

        localStorage.setItem('players', JSON.stringify(players))
    }

    update(data, id) {
        const players = this.getAll()
        players.splice(id, 1, data)
        localStorage.setItem('players', JSON.stringify(players))
    }

    delete(id) {
        const players = this.getAll()
        players.splice(id, 1)
        localStorage.setItem('players', JSON.stringify(players))
    }
}

export default new PlayersService()