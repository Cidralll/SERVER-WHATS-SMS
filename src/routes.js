const { Router } = require('express')
const { Time } = require('./time')

const router = Router()

router.get('/', function(req, res) {
    //Time()
    res.send("Pag de envio")
})
module.exports = router