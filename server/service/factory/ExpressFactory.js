const express = require('express');
const SomaController = require('../../controller/SomaController');
const SubtracaoController = require('../../controller/SubtracaoController');
const MultiplicacaoController = require('../../controller/MultiplicacaoController');
const DivisaoController = require('../../controller/DivisaoController');

class ExpressFactory {
    static iniciarServidor(port = 3000) {
        const app = express();

        app.use(express.json());
        app.use('/api/soma', SomaController);
        app.use('/api/subtracao', SubtracaoController);
        app.use('/api/multiplicacao', MultiplicacaoController);
        app.use('/api/divisao', DivisaoController);

        app.listen(port, function () {
            console.log(`Servidor rodando na porta ${this.address().port} pelo PID: ${process.pid}`);
        })
    }
}

module.exports = ExpressFactory;