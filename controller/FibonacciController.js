const express = require('express');
const router = express.Router();
const FibonacciService = require('../util/FibonacciService');

router.post('/', (request, response) => {
    let quantidade = request.body.quantidade;
    let resultado = FibonacciService.calcular(quantidade);
    console.log(`Resultado do calculo Fibonacci: ${resultado}`);
    response.status(200).send(resultado.toString());
});

module.exports = router;