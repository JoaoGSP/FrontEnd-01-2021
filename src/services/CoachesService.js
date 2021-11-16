class CoachesService {

    getAll() {
        const coaches = localStorage.getItem('coaches')
        return coaches ? JSON.parse(coaches) : []
    }

    get(id) {
        const coaches = this.getAll()
        return coaches[id]
    }

    create(data) {
        const coaches = this.getAll()
        coaches.push(data)

        localStorage.setItem('coaches', JSON.stringify(coaches))
    }

    update(data, id) {
        const coaches = this.getAll()
        coaches.splice(id, 1, data)
        localStorage.setItem('coaches', JSON.stringify(coaches))
    }

    delete(id) {
        const coaches = this.getAll()
        coaches.splice(id, 1)
        localStorage.setItem('coaches', JSON.stringify(coaches))
    }
}

export default new CoachesService()