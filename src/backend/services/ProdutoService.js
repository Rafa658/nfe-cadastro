const mongoose = require('mongoose');
const produto = require('../models/Produto');

const Produto = mongoose.model('Produto', produto)

class ProdutoService {
    async Create(nome, ncm, und, preco) {

        if (!nome || !ncm || !und || !preco) return false

        var newProduto = new Produto({ nome, cnpj, loc })

        try {
            await newProduto.save()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async FindAll() {
        try {
            var result = await Produto.find()
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async Find(nome, cnpj, loc) {
        try {
            var result = await Produto.find({ nome, cnpj, loc })
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
}

module.exports = new ProdutoService()