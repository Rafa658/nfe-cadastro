const express = require('express')
const cors = require('cors')
const ClienteService = require('../backend/services/ClienteService')
const ProdutoService = require('../backend/services/ProdutoService')
const TabelaMaker = require('../backend/factory/TabelaMaker')
const connectToDatabase = require('./database')
const port = 4000

const app = express()
app.use(cors())
app.use(express.json())

connectToDatabase()

data = require('../data/tabela_ncm.json') // dados brutos do json
var nomenclaturas = data.Nomenclaturas // array com itens provindo do json
ncm_tabela = TabelaMaker(nomenclaturas)

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
        body.ncm_id,
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