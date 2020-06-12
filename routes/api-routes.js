// const db = require('../models')

module.exports = (app)=>{
    app.post("/signup", (req,res)=>{
        console.log(req.body)
    })
}