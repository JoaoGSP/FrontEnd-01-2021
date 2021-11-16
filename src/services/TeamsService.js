class TeamsService {

    getAll() {
        const teams = localStorage.getItem('teams')
        return teams ? JSON.parse(teams) : []
    }

    get(id) {
        const teams = this.getAll()
        return teams[id]
    }

    create(data) {
        const teams = this.getAll()
        teams.push(data)

        localStorage.setItem('teams', JSON.stringify(teams))
    }

    update(data, id) {
        const teams = this.getAll()
        teams.splice(id, 1, data)
        localStorage.setItem('teams', JSON.stringify(teams))
    }

    delete(id) {
        const teams = this.getAll()
        teams.splice(id, 1)
        localStorage.setItem('teams', JSON.stringify(teams))
    }
}

export default new TeamsService()