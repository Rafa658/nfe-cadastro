const mongoose = require('mongoose')

const cliente = new mongoose.Schema({
    nome: String,
    cnpj: String,
    loc: String,
})

module.exports = cliente