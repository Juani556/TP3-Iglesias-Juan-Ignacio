import express from "express";
import Controller from "../controller/controller.js";

class Router {
    
    constructor() {
        this.router = express.Router()
        this.controller = new Controller()
    }

    start() {

        this.router.get("", this.controller.obtenerLibros)
        this.router.get("/:id", this.controller.obtenerLibros)
        this.router.post("", this.controller.guardarLibro)
        this.router.put("/:id", this.controller.actualizarLibro)
        this.router.delete("/:id", this.controller.borrarLibro)

        return this.router
    }
}

export default Router