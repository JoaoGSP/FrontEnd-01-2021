class GamesService {

    getAll() {
        const games = localStorage.getItem('games')
        return games ? JSON.parse(games) : []
    }

    get(id) {
        const games = this.getAll()
        return games[id]
    }

    create(data) {
        const games = this.getAll()
        games.push(data)

        localStorage.setItem('games', JSON.stringify(games))
    }

    update(data, id) {
        const games = this.getAll()
        games.splice(id, 1, data)
        localStorage.setItem('games', JSON.stringify(games))
    }

    delete(id) {
        const games = this.getAll()
        games.splice(id, 1)
        localStorage.setItem('games', JSON.stringify(games))
    }
}

export default new GamesService()