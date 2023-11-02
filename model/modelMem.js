
class ModelMem {

    constructor() {
        this.libros = [{id: 1, titulo: "El aleph", autor: "Borges", año: 1949},
        {id: 2, titulo: "Ficciones", autor: "Borges", año: 1944}]   
    }

    obtenerLibro = async (id) => {
        if (id) { 
            return this.libros.find((libro) => libro.id == id) || {mensaje: "No hay libro con esa id"}
        } else {
            return this.libros
        }
    }

    guardarLibro = async (libro) => {
        libro.id = (this.libros[this.libros.length - 1]?.id || 0) + 1
        this.libros.push(libro)
        return libro
    }

    actualizarLibro = async (id, libro) => {
        libro.id = id
        const index = this.libros.findIndex(libro => libro.id == id)

        if (index != -1) {
            const libroAnt = this.libros[index]
            const libroNuevo = {...libroAnt, ...libro}
            this.libros.splice(index, 1, libroNuevo)
            return libroNuevo
        } else {
            return {mensaje: "No hay libro con esa id"}
        }
    }

    borrarLibro = async (id) => {
        let libro = {}

        const index = this.libros.findIndex( libro => libro.id == id )
        if(index != -1) {
            libro = this.libros.splice(index,1)[0]
        } else {
            return {mensaje: "No existe libro con ese id"}
        }
        return libro
    }

}

export default ModelMem