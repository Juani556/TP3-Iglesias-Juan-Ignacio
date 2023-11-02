import Service from "../service/service.js"

class Controller {

    constructor() {
        this.service = new Service()
    }

    obtenerLibros = async (req, res) => {
        res.json(await this.service.obtenerLibros(req.params.id))
    }

    guardarLibro = async (req, res) => {
        res.json(await this.service.guardarLibro(req.body))
    }

    borrarLibro = async (req, res) => {
        res.json(await this.service.borrarLibro(req.params.id))
    }

    actualizarLibro = async (req, res) => {
        res.json(await this.service.actualizarLibro(req.params.id, req.body))
    }
    
}

export default Controller