class RefereesService {

    getAll() {
        const referees = localStorage.getItem('referees')
        return referees ? JSON.parse(referees) : []
    }

    get(id) {
        const referees = this.getAll()
        return referees[id]
    }

    create(data) {
        const referees = this.getAll()
        referees.push(data)

        localStorage.setItem('referees', JSON.stringify(referees))
    }

    update(data, id) {
        const referees = this.getAll()
        referees.splice(id, 1, data)
        localStorage.setItem('referees', JSON.stringify(referees))
    }

    delete(id) {
        const referees = this.getAll()
        referees.splice(id, 1)
        localStorage.setItem('referees', JSON.stringify(referees))
    }
}

export default new RefereesService()