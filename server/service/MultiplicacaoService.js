class MultiplicacaoService {

    constructor(numeros = []) {
        this._numeros = numeros;
    }

    calcular() {
        return this._numeros.reduce((total, valorAtual) => total * valorAtual, this._numeros.shift());
    }
}

module.exports = MultiplicacaoService;