const {getcompany,postcompany,putcompany,deletecompany} = require('../controller/companyController')

const route = require('express').Router()

route.get('/',getcompany)
route.post('/',postcompany)
route.put('/:id',putcompany)
route.delete('/:id',deletecompany)

module.exports = route