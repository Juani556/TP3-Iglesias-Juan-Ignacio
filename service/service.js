import ModelMem from "../model/modelMem.js"

class Service {

    constructor() {
        this.model = new ModelMem()
    }

    guardarLibro = async (libro) => {
        return await this.model.guardarLibro(libro)
    }

    actualizarLibro = async (id, libro) => {
        return await this.model.actualizarLibro(id, libro)
    }

    obtenerLibros = async (id) => {
        return await this.model.obtenerLibro(id)
    }

    borrarLibro = async (id) => {
        return await this.model.borrarLibro(id)
    }

}

export default Service