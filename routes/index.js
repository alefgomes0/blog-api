const express = require("express")
const router = express.Router()
const teste = require("../controllers/teste")


router.get("/", (req, res, next) => res.send("oiii"))
router.get("/teste", teste.testando)


module.exports = router