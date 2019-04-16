const express = require('express');
const router = express.Router();
const FibonacciUtil = require('../util/FibonacciUtil');

router.post('/', (request, response) => {
    let quantidade = request.body.quantidade;
    let resultado = FibonacciUtil.calcular(quantidade);
    console.log(`Resultado do calculo Fibonacci: ${resultado}`);
    response.status(200).send(resultado.toString());
});

module.exports = router;