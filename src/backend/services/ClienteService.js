const mongoose = require('mongoose');
const cliente = require('../models/Cliente');

const Cliente = mongoose.model('Cliente', cliente)

class ClienteService {
    async Create(nome, cnpj, loc) {

        if (!nome || !cnpj || !loc) return false

        var newCliente = new Cliente({ nome, cnpj, loc })

        try {
            await newCliente.save()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async FindAll() {
        try {
            var result = await Cliente.find()
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async Find(nome, cnpj, loc) {
        try {
            var result = await Cliente.find({ nome, cnpj, loc })
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }
}

module.exports = new ClienteService()