const express = require('express');
const router = express.Router();
const SomaService = require('../service/SomaService');

router.post('/', (request, response) => {
    let somaService = new SomaService(request.body.numeros);
    let total = somaService.calcular();
    console.log('Total da soma: %d', total);
    response.status(200).send(total.toString());
});

module.exports = router;