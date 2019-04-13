class SomaService {

    constructor(numeros = []) {
        this._numeros = numeros;
    }

    calcular() {
        return this._numeros.reduce((total, valorAtual) => total + valorAtual);
    }
}

module.exports = SomaService;