require('dotenv').config()

const mongoose = require('mongoose')
const url = process.env.DATABASE_URL

function connectToDatabase() {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    
    const db = mongoose.connection
    db.on("error", error => console.log(error))
    db.on("open", () => console.log('Conectado à DB'))
}

module.exports = connectToDatabase