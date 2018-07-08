const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/listings', require('./listings'))
route.use('/wishlist', require('./wishlist'))
route.use('/message1', require('./message1'))

exports = module.exports = {
    route
}