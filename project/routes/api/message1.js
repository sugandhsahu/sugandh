const Message = require('../../db').Message
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
   Message.findAll()
        .then((message1) => {
            res.status(200).send(message1)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})

route.post('/getmessage', (req, res) => {
    // Get all products
   Message.findAll({
	   where:{selleridEmail: req.body.selleridEmail}
   })
        .then((message1) => {
            res.status(200).send(message1)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve Listings"
            })
        })
})
route.post('/', (req, res) => {
    // Validate the values
   
    // Add a new product
   Message.create({
        message: req.body.message,
        userid: req.body.userid,
        selleridEmail: req.body.selleridEmail
    }).then((message1) => {
        res.status(201).send(message1)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route