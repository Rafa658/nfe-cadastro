const express = require('express')
const app = express()
const ClienteService = require('../backend/services/ClienteService')
const ProdutoService = require('../backend/services/ProdutoService')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const TabelaMaker = require('../backend/factory/TabelaMaker')
const port = 4000
const url = 'mongodb://127.0.0.1:27017/nfe-projeto'
data = require('../data/tabela_ncm.json') // dados brutos do json

app.use(cors())
app.use(express.json())


var nomenclaturas = data.Nomenclaturas // array com itens provindo do json

ncm_tabela = TabelaMaker(nomenclaturas)


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(port, () => {
    console.log(`Iniciado na porta ${port}`)
})

app.get("/listar_clientes", async (req, res) => {
    
    var busca = await ClienteService.FindAll()
    res.send(busca)
    res.status(200)
})

app.get("/listar_produtos", async (req, res) => {
    
    var busca = await ProdutoService.FindAll()
    res.send(busca)
    res.status(200)
})

app.get("/ncm", async(req, res) => {
    res.send(ncm_tabela)
    res.status(200)
})

app.post("/cadastro_clientes", async (req, res) => {
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

app.post("/cadastro_produtos", async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*")
    var body = req.body

    var status = await ProdutoService.Create(
        body.nome,
        body.ncm,
        body.und,
        body.preco
    )

    if (status) {
        res.status(200)
        res.send("OK")
    } else {
        res.status(400)
        res.send('Erro')
    }
})