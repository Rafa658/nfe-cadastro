const mongoose = require('mongoose')

const produto = new mongoose.Schema({
    nome: String,
    ncm: String,
    ncm_id: String,
    und: String,
    preco: Number,
})

module.exports = produto