const express = require('express');
const SomaController = require('./controller/SomaController');
const SubtracaoController = require('./controller/SubtracaoController');
const MultiplicacaoController = require('./controller/MultiplicacaoController');
const DivisaoController = require('./controller/DivisaoController');

const app = express();

app.use(express.json());
app.use('/api/soma', SomaController);
app.use('/api/subtracao', SubtracaoController);
app.use('/api/multiplicacao', MultiplicacaoController);
app.use('/api/divisao', DivisaoController);

app.listen(3000, function () {
    console.log("Servidor rodando na porta: %d", this.address().port);
});