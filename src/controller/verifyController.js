
// const verificacao = require('../middleware/validateste')

const verifyController = async (req, res) => {
    const resultado = req.body

    const {noMatch } = req.body    

    const result = noMatch.length === 0? true : false

    req.body['verify']= result

    res.status(201).json(resultado)
}

module.exports= verifyController