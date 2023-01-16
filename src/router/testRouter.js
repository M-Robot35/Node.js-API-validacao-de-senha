const { Router } = require('express');
const verifyController = require('../controller/verifyController.js')
const {
    lowercase,
    uppercase, 
    digits, 
    specialChars,
    numbers, 
    specialCharsNoRepeat
} = require('../middleware/validateste')
const route = Router()


/*
    Midware fara a validação dos dados antes de entrar no sistema

*/
tests = [
    lowercase, 
    uppercase, 
    digits, 
    specialChars,
    numbers,
    specialCharsNoRepeat
]

route.post('/verify', tests, verifyController)

module.exports = route




