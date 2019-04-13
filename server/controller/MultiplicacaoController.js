const express = require('express');
const router = express.Router();
const MultiplicacaoService = require('../service/MultiplicacaoService');

router.post('/', (request, response) => {
    let multiplicacaoService = new MultiplicacaoService(request.body.numeros);
    let total = multiplicacaoService.calcular();
    console.log('Total da multiplicação: %d', total);
    response.status(200).send(total.toString());
});

module.exports = router;