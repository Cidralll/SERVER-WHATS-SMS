const { Router } = require('express')

const router = Router()

router.get('/', function(req, res) {
    Time();
    res.send("Pag inicial")
})

module.exports = router