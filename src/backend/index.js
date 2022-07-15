const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ClienteService = require('../backend/services/ClienteService')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

const port = 4000
const url = 'mongodb://127.0.0.1:27017/nfe-projeto'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port, () => {
    console.log(`Iniciado na porta ${port}`)
})

app.get("/listar", async (req, res) => {
    
    var busca = await ClienteService.FindAll()
    res.send(busca)
    res.status(200)
})

app.post("/cadastro", async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*")
    var body = req.body

    var status = await ClienteService.Create(
        body.nome,
        body.cnpj,
        body.loc
    )

    if (status) {
        res.status(200)
        res.send("OK")
    } else {
        res.status(400)
        res.send('Erro')
    }
})