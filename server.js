import express from "express"
import Router from "./router/router.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/libros", new Router().start())

app.listen(8080, () => console.log("Servidor escuchando en puerto 8080"))
