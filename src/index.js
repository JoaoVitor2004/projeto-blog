const express = require("express")
const path = require("node:path")
const router = require("./router")

const app = express()
const PORT = 3000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(router)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))