const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const companyroute = require('./route/companyRoute')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(cors())

// Default route
app.get('/',(req,res)=>{
    res.send("This is home page")
})

app.use('/api/mnccompanies',companyroute)

app.listen(process.env.PORT,()=>{
    console.log("Listening on port 5000");
})

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log("error",error);
    }
}
main()