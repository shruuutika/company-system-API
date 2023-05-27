const mongoose = require('mongoose')

const companySchema = mongoose.Schema({

    companyName:{
        type: String,
        require: true
    },
    companyLocation:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('mnccompanies',companySchema)