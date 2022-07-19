const mongoose = require('mongoose')

const produto = new mongoose.Schema({
    nome: String,
    ncm: String,
    und: String,
    loc: String,
})

module.exports = produto