class FibonacciService {
    static fibonacci(numero) {
        return numero < 2 ? numero : FibonacciService.fibonacci(numero - 1) + FibonacciService.fibonacci(numero - 2);
    }

    static calcular(quantidade) {
        let numero;
        for (let i = 0; i < quantidade; i++) {
            numero = +FibonacciService.fibonacci(i);
        }
        return numero;
    }
}

module.exports = FibonacciService;