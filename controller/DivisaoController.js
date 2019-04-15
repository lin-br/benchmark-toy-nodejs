const express = require('express');
const router = express.Router();
const DivisaoService = require('../service/DivisaoService');

router.post('/', (request, response) => {
    let divisaoService = new DivisaoService(request.body.numeros);
    let total = divisaoService.calcular();
    console.log('Total da divisão: %d', total);
    response.status(200).send(total.toString());
});

module.exports = router;