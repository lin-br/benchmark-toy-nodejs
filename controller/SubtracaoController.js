const express = require('express');
const router = express.Router();
const SubtracaoService = require('../service/SubtracaoService');

router.post('/', (request, response) => {
    const subtracaoService = new SubtracaoService(request.body.numeros);
    let total = subtracaoService.calcular();
    console.log("Total da Subtração: %d", total);
    response.status(200).send(total.toString());
});

module.exports = router;