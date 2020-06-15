var db = require("../models");

module.exports = (app)=>{
    app.post("/signup", (req,res)=>{
        console.log(req.body);
    })

    app.get("/api/summary/:id", async function(req, res) {
        const account = await db.Account.findOne(
            {include: [db.Position, db.Transaction],
                where:{
                    uuid: req.params.id
                }
        });
        const currencies = await db.Currency.findAll({
            include: [db.ExchangeRate]
        })
        res.json({account, currencies})
    });
}