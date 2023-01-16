const express = require('express');

const route = require('./src/router/testRouter.js');

const cors = require('cors')({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    'Access-Control-Allow-Origin': "",
    "Access-Control-Allow-Credentials": true,
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  });

const port = process.env.PORT || 4000

const app = express();
app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(route)

app.use('/',(req, res)=>{res.status(404).send('Teste: Thiago Teles de Souza')})


app.listen(port, console.log(`Test Thiago Teles de Souza: [ ONLINE ]: http://localhost:${port}/`))
















